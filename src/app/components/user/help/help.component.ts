import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  name = 'Angular 6';
  s="https://www.youtube.com/embed/gCbJbKDpFRw";
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.s);
  }

  limpiarAll(){
    console.log("STOP VIDEO");
    
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("");
  }
  llenarAll(){
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.s);
  }

}
