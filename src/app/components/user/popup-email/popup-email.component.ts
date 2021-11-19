import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-email',
  templateUrl: './popup-email.component.html',
  styleUrls: ['./popup-email.component.css']
})
export class PopupEmailComponent {

  toggleChat(selector, selector2, visible) {
    console.log("AQUIIIIIIIII ");
    var elemento = document.querySelector(selector);
    var btnEmail = document.querySelector(selector2);
    console.log(elemento);
      if (elemento != null) {
       elemento.style.display = visible?'block':'none';
       btnEmail.style.display = !visible?'block':'none';
      }
  }

}
