import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ComposeComponent } from './compose/compose.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    AboutComponent,
    ContactComponent,
    MainPageComponent,
    ComposeComponent,
    ForgotEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'SignUp', component: SignInComponent },
      { path: 'SignUp', component: SignUpComponent },
      { path: 'ForgotPassword', component: ForgotPasswordComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'MainPage', component: MainPageComponent },
      { path: 'Compose', component: ComposeComponent },
      { path: 'ForgotEmail', component: ForgotEmailComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
