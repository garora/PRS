import { Component, OnInit } from '@angular/core';

import { VendorService} from '@svc/vendor.service'; //ADDED
import {Vendors} from '@model/vendors.class';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendors[];
  title: string = 'Vendor-List';
  sortCriteria = 'name';
  sortOrder = 'asc';

  constructor(private vendorSvc: VendorService) { }

  ngOnInit() {
    // populate list of vendors
    this.vendorSvc.list().subscribe(
      resp => {
        this.vendors = resp;
        console.log(this.vendors);
      }
    );
  }

  sortBy(column: string): void {    // sort by added to nav bar in future
    if (this.sortCriteria === column) {

      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc' );
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';

    }
    }
}
