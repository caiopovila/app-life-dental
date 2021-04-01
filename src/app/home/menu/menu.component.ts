import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = 'Life Dental';

  links = [
    {link: './', name: 'Início', icon: 'home'},
    {link: './settings', name: 'Perfil', icon: 'manage_accounts'},
    {link: './products', name: 'Meus produtos', icon: 'shop'},
  ]

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  exit() {
    sessionStorage.clear();
    this.route.navigate(['/']);
  }
}
