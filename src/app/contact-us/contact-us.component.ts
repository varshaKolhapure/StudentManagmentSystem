import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  uname='varsha';
  flag1:boolean=true;
  flag2:boolean=false;

  constructor(){

  }
  ngOnInit(){

  }
  myfun(){
    alert("Hello varsha");
    this.uname="khatav"

  }

}
