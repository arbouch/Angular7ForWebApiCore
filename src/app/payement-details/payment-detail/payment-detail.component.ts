import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service :PaymentDetailService) { }

  ngOnInit(): void {
    this.resetForm();
  }
resetForm(form?:NgForm) {
if(form!=null)
  form.resetForm() ;

this.service.formData = {
  PMId:0,
  CardOwnerName:'',
  CardNumber:0,
  CVV:0,
  ExpirationDate:''

}
}
onSubmit(form:NgForm) {
  this.service.postPayementDetail(form.value).subscribe(
    res=>{
      this.resetForm(form);
    },
    err => {console.log(err);
    }
    
  )
}
}
