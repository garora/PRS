import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../../service/system.service';
import { Requests } from '../../../model/requests.class';
import { RequestService } from '../../../service/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Requests = new Requests();
  title = 'Request Detail';

  
  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }  // after deleteing request, reroute back to // activatedroute uses id supplied in body of request


    
  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request = resp as Requests;
        console.log('request detail' + this.request.id);
      })
    });

  }
  remove() {
    this.requestSvc.delete(this.request.id).subscribe(resp => {
      alert('Request ' + this.request.id + ' successfully deleted!');
      this.router.navigateByUrl('/request/list');
    },
      err => {
        console.log('error deleting request');
        console.log(err);
      });
  }
  // NEED TO INJECT THE SERVICE    // ADD ROUTER ?? (WE WILL PROB USE)
  // (Framework takes care of HTTP REQUEST / TCPIP PROTOCOL)
  // can call delete with this.request.id
}// ngOnInit is the first thing on page called
    // get the id from request (JSON), GET THE ASSOCIATED USER RECORD
    // One of PARAMETER accepts id from JSON.
    //  Requests is plural due to table in db named with plural
    // because asynchronous, nesting them forces get(parms.id) to run first

