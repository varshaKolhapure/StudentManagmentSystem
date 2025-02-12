import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Import for ngModel
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { StudComponent } from './stud/stud.component';

//import for pop up window
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import for datatable
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';


//import for http client in app module
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    EmpComponent,
    StudComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
