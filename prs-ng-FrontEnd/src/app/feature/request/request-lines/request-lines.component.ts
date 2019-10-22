import { Requests } from './../../../model/requests.class';
import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../model/users.class';
import { RequestLineItems } from '@model/requestLineItems.class';
import { RequestLineItemService } from '@svc/requestLineItem.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {
 /*  ngOnInit(): void {
    throw new Error("Method not implemented.");
  } */
  title: string = 'Requested Items';
  id: number;
  loggedInUserId: Users["id"];
  lineId: string = '0';
  resp: any;
  request: Requests;
  requestLineItems: RequestLineItems[];
  requestLineItem: RequestLineItems;

  constructor(private requestSvc: RequestService,
    private requestLineItemService: RequestLineItemService,
    private systemSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute) { }



/* export class RequestLinesComponent implements OnInit {
  title: 'Request-Lines-Items'
  requestsLines: RequestLines = new RequestLines();
  requestLines: RequestLineItems[];  */
  
/* resp: Response;
  constructor(private requestSVC: RequestService, private router: Router,
    private route: ActivatedRoute, private rlSVC: RequestLinesService) {}  // inject service */
  

    ngOnInit() {
      this.route.params.subscribe(parms => this.id = parms['id']);      
      this.requestSvc.get(this.id).subscribe(requests => {
      this.request = requests;
      }
   );
      if (this.lineId!='0'&&this.lineId!=null) {
        this.delete();
      }
      this.request;
      this.requestLineItemService.listById(this.id).subscribe(prlis => {
      this.requestLineItems = prlis;
        }
      );
    }
 
    submitReview() {
      this.requestSvc.submitReview(this.request).subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/request/list']);
        });
      }
    
/*   
      delete(): void {
        this.requestLineSvc.delete(this.request.id).subscribe(res => {
        this.router.navigateByUrl("/request");
        });
      } */
    
  
   
      delete(): void {
      this.requestLineItemService.delete(this.requestLineItem.id).subscribe(res => {
      this.router.navigateByUrl("/request");
      });
    }
  
    renew(): void {
      this.requestSvc.get(this.request.id).subscribe(resp => {
      this.request = resp;
    })
  }
}
/* sortCriteria = 'request.Id'; // default sort criteria
sortOrder = 'asc';
title = 'Request-Lines';      //



  sortBy(column: string): void {    // sort by added to nav bar
    if (this.sortCriteria === column) {

      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc' );
    } else {
      this.sortCriteria = column;   // can change the column that you want to sort by or the order
      this.sortOrder = 'asc';

    }
    }
   // populate list of requests
  // check sysservice for logged in request
  // this.loggedInRequest = this.sysSvc.data.Requests.instance;
  // console.log('loggedInRequest = "+this.loggedInRequest.email');
  // this.requestSvc.list().subscribe (
  //   resp => {
  //     this.requests = resp;
  //     console.log(this.requests);
  }


  /* ngOnInit(): void {
    throw new Error("Method not implemented."); 
  } */