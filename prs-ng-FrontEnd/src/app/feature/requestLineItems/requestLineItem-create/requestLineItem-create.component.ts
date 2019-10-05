import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestService } from '../../../service/request.service';
import { SystemService } from '../../../service/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './requestLineItem-create.component.html',
  styleUrls: ['./requestLineItem-create.component.css']
})
export class RequestLineItemCreateComponent implements OnInit {
request: Requests = new Requests();
title: 'Request-Create';
  constructor(private requestSvc: RequestService, private sysSvc: SystemService,
              private router: Router ) {    //  injects property into component (then we need to forward it )

  }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.request.user = this.sysSvc.data.user.instance;
    } else {
      console.error("Please log in.");
    }
  
}
//   this is all we need to save request
  create() {
    this.requestSvc.create(this.request).subscribe( resp => {
      //  success
      console.log(resp);
      // console.log('1');
      this.router.navigateByUrl('/request-create"/list');   // needs injected into constructor

    },
    err => {
      //  error
      console.log(err);
       // console.log('2');
    }
    );
  }
}
