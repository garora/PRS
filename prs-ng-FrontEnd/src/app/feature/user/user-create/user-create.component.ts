import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../model/users.class';
import { UserService } from '../../../service/user.service';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
user: Users = new Users();
title: string = 'User-Create';
  constructor(private userSvc: UserService,
              private router: Router ) {    //  injects property into component (then we need to forward it )

  }

  ngOnInit() {
  }

  create() {
    this.userSvc.create(this.user).subscribe( resp => {   //   this is all we need to save user
      //  success
      console.log('1');
      console.log(resp);
      this.router.navigateByUrl('/user/list');   // needs injected into constructor

    },
    err => {
      //  error
      // console.log('2');
      console.log(err);
    }
    );
  }
}
