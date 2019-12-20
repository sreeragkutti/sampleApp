import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMenu = 'menuone'; // initial selected menu
  menuone = 'menuone';
  menutwo = 'menutwo';
  menuthree = 'menuthree';

  onMenuClick(menuName: string) {
    console.log(menuName);
    this.currentMenu = menuName;
  }
}
