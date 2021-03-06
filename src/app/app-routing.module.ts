import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ComposeComponent } from './compose/compose.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'SignUp',component:SignUpComponent},
 {path:'SignIn',component:SignInComponent},
 { path: 'ForgotPassword', component: ForgotPasswordComponent },
 { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'Compose', component: ComposeComponent },
  { path: 'ForgotEmail', component: ForgotEmailComponent },
  { path: 'DeleteAccount', component: DeleteAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
