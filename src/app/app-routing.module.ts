import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
