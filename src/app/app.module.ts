import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaymentDetailService } from './shared/payment-detail.service';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PayementDetailsComponent } from './payement-details/payement-details.component';
import { PaymentDetailComponent } from './payement-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payement-details/payment-detail-list/payment-detail-list.component';
import {  HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PayementDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
