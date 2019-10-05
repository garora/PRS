
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestService } from '../../../service/request.service';
import { SystemService } from '../../../service/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request: Requests = new Requests();
title: 'Request-Create';
resp: any;


  constructor(private requestSvc: RequestService, private sysSvc: SystemService,
              private router: Router ) {    //  injects property into component (then we need to forward it )
  }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.request.user = this.sysSvc.data.user.instance;
    } else {
      console.error("Please log in.");
    }
  };

      //   this is all we need to save request
  create() {
    this.requestSvc.create(this.request).subscribe( resp => {
    this.request = resp.Data;
      // console.log('1');
      console.log(resp);           //  success
      this.router.navigateByUrl('/request-create"/list');    // needs injected into constructor
    },
    err => {
      // console.log('2');
      console.log(err);            //  error

    }
    );
  }}
