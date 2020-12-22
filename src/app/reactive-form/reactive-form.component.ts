import { Component, getDebugNode, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { formatCurrency, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  Sdata: any;

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Getnewsfeed();
  }

  onSubmit(form: NgForm) {
    if (this.service.NewData.Id == 0)
      this.insertRecord(form.value);
      //console.log(form);
    else
      this.updateRecord(form);

  }
 //this.service.NewData = new EmployeeDetail();

  insertRecord(form: NgForm) {

    this.service.postPaymentDetail1().subscribe(
      res => {

        this.service.refreshList1();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {

        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.NewData = new EmployeeDetail();
  }

  Getnewsfeed(){
    //to get USER ID

   this.service.getSdata1().subscribe((res) => {
     this.Sdata = res;
     console.log(this.Sdata);
   });
  }

  onDelete(id: number) {
    console.log(id);
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletedata(id)
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
