import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '@model/requests.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {
  title: 'Request-Edit';
  id: number;
  resp: any;
  request: Requests;
 

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

    // need to get id request from request, get the associated request record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.
  //  Requests is plural due to table in db named with plural
   // because asynchronous, nesting them forces get(parms.id) to run first

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request = resp as Requests;
        console.log('request edit' + this.request.id);
      })
    });
}

//   this is all we need to save request
edit() {
  this.requestSvc.edit(this.request).subscribe( resp => {   
    //  success
    console.log(resp);
    this.router.navigateByUrl('/request/list');   // needs injected into constructor
  },
  err => {
    //  error
    console.log(err);
  }
  );
}

}
