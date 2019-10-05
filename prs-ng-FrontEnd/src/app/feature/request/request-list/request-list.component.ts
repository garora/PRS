
import { Component, OnInit } from '@angular/core';
import { Requests } from '../../../model/requests.class';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
//import { constructor } from 'console';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Requests[];   // property used in component typescript file to store list of requests once the service method is called

sortCriteria = 'requestname'; // default sort criteria
sortOrder = 'asc';
title = 'Request-List';      // adds [Request-List] to white space between NAV & menu bar

constructor(private requestSvc: RequestService, private sysSvc: SystemService ) {}  // inject service

  ngOnInit() {
      this.requestSvc.list().subscribe(
        resp => {
          this.requests = resp;
          console.log(this.requests);
}
    );
  }

  sortBy(column: string): void {    // sort by added to nav bar
    if (this.sortCriteria === column) {

      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc' );
    } else {
      this.sortCriteria = column;   // can change the column that you want to sort by or the order
      this.sortOrder = 'asc';

    }
    }// Finish updating this and request-list.html later with bootstrap stuff  ex:thead-dark-->

   // populate list of requests
  // check sysservice for logged in request
  // this.loggedInRequest = this.sysSvc.data.Requests.instance;
  // console.log('loggedInRequest = "+this.loggedInRequest.email');
  // this.requestSvc.list().subscribe (
  //   resp => {
  //     this.requests = resp;
  //     console.log(this.requests);
  }


