import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem('Login','/user/login', 'User Login'),
    new MenuItem('Users','/user/list', 'User List'),
    new MenuItem('Vendors','/vendor/list', 'Vendor List'),
    new MenuItem('Products','/product/list', 'Product List'),
    new MenuItem('Requests','/request/list', 'Request List'),
    new MenuItem('Review','/request/review', 'Request Review'),
    new MenuItem('About','/about', 'About')
  ];

  constructor() { }

  ngOnInit() {
  }

}
