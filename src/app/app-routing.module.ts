import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./RoutDirectory/auth.guard";
import {RoutingClass} from "./RoutDirectory/RoutingClass";

const routes: Routes = [
  {path:RoutingClass.home,loadChildren:()=>import('./PageComponentChildren/page.module').then(value => value.routs)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
