import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import firebase from "firebase/app";
import "firebase/auth";

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public user$: Observable<UserInterface>;

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afsAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<UserInterface>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
   }

/*
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }
*/
 async loginGoogleUser() {
    try {
        const { user } = await this.afsAuth.signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
        );
        this.updateUserData(user);
        return user;
      } catch (error) {
        console.log(error);
      }
  }

async logout(): Promise<void> {
    try {
      await this.afsAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
  isAuthPrueba() {
        return this.afsAuth.authState.pipe(first()).toPromise();
      }
/*
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true })
  }


  isUserAdmin(userUid) {
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

*/
private updateUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: UserInterface = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      roles: 'ADMIN',
    };

    return userRef.set(data, { merge: true });
  }

}