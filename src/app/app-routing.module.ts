import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {
    path:'Product', component:PaymentDetailsComponent
  },
  {
    path:'DTableCheck', component: DataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
