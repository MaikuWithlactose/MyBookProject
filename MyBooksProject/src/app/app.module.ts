import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './pages/books/books.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardComponent } from './component/card/card.component';
import { FormBookComponent } from './component/form-book/form-book.component';
import { BookCodePipe } from './book-code.pipe';
import { AddBooksComponent } from './pages/addbooks/add-books.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { FormRegisterComponent, } from './component/register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BooksService} from './shared/books.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BooksComponent,
    CardComponent,
    FormBookComponent,
    AddBooksComponent,    
    UpdateBookComponent,
    BookCodePipe,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
