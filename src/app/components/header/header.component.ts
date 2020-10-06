import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('myCheckbox') myCheckbox: ElementRef;
  toggle = false;
  constructor() { }
  themeToggle;

  ngOnInit(): void {
  }
  switchClicked( clicked ) {
    if (clicked) {this.toggle = this.toggle ? false : true;}
  }

}
