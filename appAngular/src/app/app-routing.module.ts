import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { TelaLoginComponent } from 'src/app/page/tela-login/tela-login.component';
import { HomeComponent } from 'src/app/page/home/home.component';

const routes: Routes = [
    {
      path: '',
    redirectTo: 'tela-login',
    pathMatch: 'full'
  },
    {path: 'tela-login', component: TelaLoginComponent},
    {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
