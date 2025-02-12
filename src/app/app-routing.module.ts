import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmpComponent } from './emp/emp.component';
import { StudComponent } from './stud/stud.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'emp', component: EmpComponent},
  { path: 'stud', component: StudComponent},
  { path: 'login', component: LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
