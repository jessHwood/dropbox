import { Component } from '@angular/core';

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showNav(nav, hamburger){
    nav.classList.toggle('collapse');
  }
}
