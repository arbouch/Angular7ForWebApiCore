import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service :PaymentDetailService, private toast :ToastrService) { }

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
      this.toast.success('ajout avec succees',"Payement Detail Register");
    },
    err => {console.log(err);
    }
    
  )
}
}
