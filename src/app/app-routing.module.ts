import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { headerComponent } from './header/header.component';
import { SalesComponent } from './sales/sales.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'products',
    component: HomeComponent
  }, 
  {
    path: 'header',
    component: headerComponent
  },
  {
    path: "sale",
    component: SalesComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
