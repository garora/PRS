import { Component, OnInit } from '@angular/core';
import { Vendors } from '@model/vendors.class';
import { Router } from '@angular/router';
import { VendorService } from '@svc/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {    
  vendor: Vendors = new Vendors();
  title: string = 'Vendor-Create';

  constructor(private vendorSvc: VendorService, 
    private router: Router) { }   //  injects property into component (then we need to forward it )

  ngOnInit() {
  }
  create() {
    this.vendorSvc.create(this.vendor).subscribe( resp => {   //   this is all we need to save user
      //  success
      // console.log('1');
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
