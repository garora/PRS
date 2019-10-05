import { Component, OnInit } from '@angular/core';
import { Vendors } from '@model/vendors.class';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendors = new Vendors();
  title: string = 'Vendor-Detail';
  // NEED TO INJECT THE SERVICE    // ADD ROUTER ?? (WE WILL PROB USE) 
  //(Framework takes care of HTTP REQUEST / TCPIP PROTOCOL)
  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }  // after deleteing vendor, reroute back to // activatedroute uses id supplied in body of request

  // ngOnInit is the first thing on page called
  ngOnInit() {     // get the id from requiest (JSON), GET THE ASSOCIATED USER RECORD
    this.route.params.subscribe(parms => {  // One of PARAMETER accepts id from JSON.     
      this.vendorSvc.get(parms.id).subscribe(resp => {
        this.vendor = resp as Vendors;  //  Vendors is plural due to table in db named with plural
        // because asynchronous, nesting them forces get(parms.id) to run first
        console.log('vendor detail' + this.vendor.id);
      })
    });

  }

  // can call del with this.vendor.id
  remove() {
    this.vendorSvc.delete(this.vendor.id).subscribe(resp => {
      alert('Vendor ' + this.vendor.name + ' successfully deleted!');
      this.router.navigateByUrl('/vendor/list');
    },
      err => {
        console.log('error deleting vendor');
        console.log(err);
      });
  }
}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-vendor-detail',
//   templateUrl: './vendor-detail.component.html',
//   styleUrls: ['./vendor-detail.component.css']
// })
// export class VendorDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
