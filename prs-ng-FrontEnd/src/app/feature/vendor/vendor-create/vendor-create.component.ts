import { Users } from './../../../model/users.class';
import { Component, OnInit } from '@angular/core';
import { Vendors } from '@model/vendors.class';
import { Router } from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {    
  vendor: Vendors = new Vendors();
  title: string = 'Vendor-Create';
  loggedInUser: Users;

  constructor(private vendorSvc: VendorService, 
    private systemSvc: SystemService,
    private router: Router) { }   //  injects property into component (then we need to forward it )

  ngOnInit() {
    this.loggedInUser = this.systemSvc.data.getLoggedInUser();
    console.log('user: ', this.loggedInUser);
  }
  create() {
    this.vendorSvc.create(this.vendor).subscribe( resp => {   //   this is all we need to save user
      //  success
      console.log('Vendor '+this.vendor.name+ ' added');
      console.log(resp);
      this.router.navigateByUrl('/vendor/list');   // needs injected into constructor

    },    
    err => {
      //  error
      // console.log('2');
      console.log(err);
    }
    );
  }

}
