import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../model/users.class';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  user: Users = new Users();
  title: string = 'Edit User';
  
  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }


    // need to get id user from request, get the associated user record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.  
  //  Users is plural due to table in db named with plural
   // because asynchronous, nesting them forces get(parms.id) to run first
  ngOnInit() {     
    this.route.params.subscribe(parms => {     
      this.userSvc.get(parms.id).subscribe(resp => {
        this.user = resp as Users;  
       
        console.log('user edit' + this.user.id);
      })
    });
}

edit() {
  this.userSvc.edit(this.user).subscribe( resp => {   //   this is all we need to save user
    //  success    
    console.log(resp);
    this.router.navigateByUrl('/user/list');   // needs injected into constructor

  },    
  err => {
    //  error   
    console.log(err);
  }
  );
}

}
