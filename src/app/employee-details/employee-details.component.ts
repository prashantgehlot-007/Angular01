import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { EmployeeDetail } from './../shared/employee-detail.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  newsfeed: any;

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Getnewsfeed();
  }

  Getnewsfeed(){
    //to get USER ID

   this.service.getNewsFeed().subscribe((res) => {
     this.newsfeed = res;
     console.log(this.newsfeed);
   });
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }


}
