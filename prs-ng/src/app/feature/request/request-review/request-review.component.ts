import { Requests } from './../../../model/requests.class';
import { Users } from './../../../model/users.class';
import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
import { RequestLinesComponent } from '../request-lines/request-lines.component';
import { RequestLineItemService } from '@svc/requestLineItem.service';

@Component( {
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: [ './request-review.component.css' ]
} )

export class RequestReviewComponent implements OnInit
{
  title = "Review Requests";
  requests: Requests[];   // property used in component typescript file to store list of requests once the service method is called
  loggedInUser: Users;
  sortCriteria = 'Id';
  sortOrder = 'asc';
  user: Users;
  request: Requests;
  resp: Response; 
  requestlines: RequestLinesComponent;


  constructor ( private requestSvc: RequestService,
    private systemSvc: SystemService,
    private requestlineItemSvc: RequestLineItemService ) { }  // inject service

  ngOnInit ()
  {
    // this.loggedInUser = this.systemSvc.data.getLoggedInUser();
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log( 'user :', this.loggedInUser );
    this.user = this.loggedInUser;

    
    
      this.requestSvc.listReview().subscribe( resp =>
      {
        this.requests = resp as Requests[];
      }
      );
    
  }
}


// // this.user = this.systemSvc.data.user.instance;
// this.user = this.systemSvc.user.instance;
//     this.requestSvc.listReview(this.user.id).subscribe(
//       resp => {   
//         this.requests = resp as Requests[];
//       });
//       if (this.loggedInUser.isReviewer!==true) {
//         console.log('You don’t have administrative authority.');
//        }
//     }
//   }


