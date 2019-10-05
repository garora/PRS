import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { Users } from '../../../model/users.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']    
})
export class UserDetailComponent implements OnInit {
  user: Users = new Users();
  title: string = 'User-Detail';
  // NEED TO INJECT THE SERVICE    // ADD ROUTER ?? (WE WILL PROB USE) 
  //(Framework takes care of HTTP REQUEST / TCPIP PROTOCOL)
  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }  // after deleteing user, reroute back to // activatedroute uses id supplied in body of request

  // ngOnInit is the first thing on page called
  ngOnInit() {     // get the id from requiest (JSON), GET THE ASSOCIATED USER RECORD
    this.route.params.subscribe(parms => {  // One of PARAMETER accepts id from JSON.     
      this.userSvc.get(parms.id).subscribe(resp => {
        this.user = resp as Users;  //  Users is plural due to table in db named with plural
        // because asynchronous, nesting them forces get(parms.id) to run first
        console.log('user detail' + this.user.id);
      })
    });

  }

  // can call del with this.user.id
  remove() {
    this.userSvc.delete(this.user.id).subscribe(resp => {
      alert('User ' + this.user.username + ' successfully deleted!');
      this.router.navigateByUrl('/user/list');
    },
      err => {
        console.log('error deleting user');
        console.log(err);
      });
  }
}