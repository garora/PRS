import { Users } from './../../../model/users.class';

import { Component, OnInit } from '@angular/core';
import { Requests } from '../../../model/requests.class';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})

export class RequestReviewComponent implements OnInit {
  requests: Requests[];   // property used in component typescript file to store list of requests once the service method is called
  user: Users;
  resp: Response;

  constructor(private requestSvc: RequestService, private sysSvc: SystemService ) {}  // inject service
  ngOnInit() {

      this.user = this.sysSvc.data.user.instance;

    this.requestSvc.listReview(this.user.id).subscribe(
      resp => {
        this.resp = resp;
        this.requests = this.resp as Requests[];
      });


    }

  }


