import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendors } from '@model/vendors.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent implements OnInit {
  vendor: Vendors = new Vendors();
  title: string = 'Edit Vendor';
  
  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }


    // need to get id vendor from request, get the associated vendor record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.  
  //  Vendors is plural due to table in db named with plural
   // because asynchronous, nesting them forces get(parms.id) to run first
  ngOnInit() {     
    this.route.params.subscribe(parms => {     
      this.vendorSvc.get(parms.id).subscribe(resp => {
        this.vendor = resp as Vendors;  
       
        console.log('vendor edit' + this.vendor.id);
      })
    });
}

edit() {
  this.vendorSvc.edit(this.vendor).subscribe( resp => {   //   this is all we need to save vendor
    //  success    
    console.log(resp);
    this.router.navigateByUrl('/vendor/list');   // needs injected into constructor

  },    
  err => {
    //  error   
    console.log(err);
  }
  );
}

}






//10/28
// import { Users } from './../../../model/users.class';
// import { Component, OnInit } from '@angular/core';
// import { VendorService } from '@svc/vendor.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Vendors } from '@model/vendors.class';
// import { SystemService } from '@svc/system.service';

// @Component( {
//   selector: 'app-vendor-edit',
//   templateUrl: './vendor-edit.component.html',
//   styleUrls: [ './vendor-edit.component.css' ]
// } )

// export class VendorEditComponent implements OnInit
// {
//   vendor: Vendors = new Vendors();
//   title: string = 'Edit Vendor';
//   loggedInUser: Users;

//   constructor ( private vendorSvc: VendorService,
//     private systemSvc: SystemService,
//     private router: Router,
//     private route: ActivatedRoute ) { }


  // need to get id vendor from request, get the associated vendor record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.  
  // because asynchronous, nesting them forces get(parms.id) to run first
  // ngOnInit ()
  // {
  //   this.loggedInUser = this.systemSvc.getLoggedInUser();
  //   console.log( 'user: ', this.loggedInUser );
  //   if ( this.loggedInUser.isAdmin == true )
  //   {
  //     this.route.params.subscribe( parms =>
  //     {
  //       this.vendorSvc.get( parms.id ).subscribe( resp =>
  //       {
  //         this.vendor = resp as Vendors;
  //         console.log( 'vendor edit' + this.vendor.id );
  //       } )
  //     } );
  //   }
  // }
  // edit ()
  // {
  //   this.vendorSvc.edit( this.vendor ).subscribe( resp =>
  //  {                                                                                              //   this is all we need to save vendor
                                                                                                     //  success    
      // console.log( resp );
      // this.router.navigateByUrl( '/vendor/list' );                                                    // needs injected into constructor

    // },
    //   err =>
    //   {
                                                                                                       //  error   
//         console.log( err );
//       }
//     );
//   }

// }

// this.loggedInUser = this.systemSvc.data.getLoggedInUser();

