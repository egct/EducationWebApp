export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface UserInterface {
    uid?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;
    displayName?: string;
    emailVerified: boolean;
  }