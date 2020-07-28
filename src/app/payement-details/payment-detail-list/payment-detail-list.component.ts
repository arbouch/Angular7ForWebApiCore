import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { PaymentDetail  } from './../../shared/payment-detail.model';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { PaymentDetailComponent } from '../payment-detail/payment-detail.component';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service : PaymentDetailService ,  private toast :ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }
  populateForm(pd:PaymentDetail){
this.service.formData=Object.assign({},pd)
  }
  onDelete(PMId ){
    if(confirm('Are u sure ? ')
    )
    {
    this.service.deletePayementDetail(PMId).subscribe(res =>  {this.service.refreshList();
this.toast.warning("delete Successfully",'Payment Detail');
    } ,
      err=> {
        console.log(err)
      })
  }
}
}
