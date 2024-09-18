import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './steppers/one/one.component';
import { TwoComponent } from './steppers/two/two.component';
import { ThreeComponent } from './steppers/three/three.component';
import { FourComponent } from './steppers/four/four.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegisterComponent } from './sesion/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'one',
    component: OneComponent
  },
  {
    path: 'two',
    component: TwoComponent
  },
  {
    path: 'three',
    component: ThreeComponent
  },
  {
    path: 'four',
    component: FourComponent
  },
  {
    path: 'reg',
    component: RegisterComponent
  },
  {
    path: 'log',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }