import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SystemService } from './service/system.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { SortPipe} from './pipe/sort.pipe';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component'
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserService } from './service/user.service';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorService } from './service/vendor.service';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductService } from './service/product.service';

import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestService } from './service/request.service';

import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';

import { RequestLineItemCreateComponent } from './feature/requestLineItems/requestLineItem-create/requestLineItem-create.component';
import { RequestLineItemEditComponent } from './feature/requestLineItems/requestLineItem-edit/requestLineItem-edit.component';
import { RequestLineItemService } from './service/requestLineItem.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SortPipe,

    UserCreateComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,

    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,

    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,

    RequestListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,

    RequestApproveComponent,
    RequestLinesComponent,
    RequestReviewComponent,
    RequestLineItemCreateComponent,
    RequestLineItemEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    RequestService,
    SystemService,
    RequestLineItemEditComponent,
    RequestLineItemService,
    HttpClientModule
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
