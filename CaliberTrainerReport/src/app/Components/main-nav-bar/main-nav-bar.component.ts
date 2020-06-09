import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {
  isBig: boolean;
  width: number;

  hamburgerOpen: boolean;
  hamburgerIcon = faBars;
  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth;

    if (this.width < 1010) {
      console.log('Screen less than 1010px'); // FOR MOBILE PHONE
      this.isBig = false;
    } else {
      console.log('Screen width is at least 1010px');
      this.isBig = true;
    }


  }

  openMenu(){
    console.log('Hamburger menu being clickeD!');
    this.hamburgerOpen = !this.hamburgerOpen;
    if (this.hamburgerOpen){
      document.getElementById('hambDropdown').style.display = 'grid';
    }else{
      document.getElementById('hambDropdown').style.display = 'none';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;

    if (this.width < 1010) {
      console.log('Screen less than 1010px'); // FOR MOBILE PHONE
      this.isBig = false;

    } else {
      console.log('Screen width is at least 1010px');
      this.isBig = true;
      this.hamburgerOpen = false;
      document.getElementById('hambDropdown').style.display = 'none';


    }
  }

}
