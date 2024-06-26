import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PdfComponent } from './components/pdf/pdf.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"pdf",component:PdfComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatRoutingModule { }
