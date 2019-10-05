import { RequestLineItems } from './../../../model/requestLineItems.class';

import { Component, OnInit } from '@angular/core';
import { Requests } from '../../../model/requests.class';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {
  requestsLines: RequestLines = new RequestLines();
  requestLines: RequestLineItems[]; 
  title: 'Request-Lines'
resp: Response;
  constructor(private requestSVC: RequestService, private router: Router,
    private route:ActivatedRoute, private rlSVC: RequestLinesService) {}  // inject service
  

 
 

sortCriteria = 'request.Id'; // default sort criteria
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


