import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExamComponent } from './views/add-exam/add-exam.component';
import { AddQuestionComponent } from './views/add-question/add-question.component';
import { ExamComponent } from './views/exam/exam.component';
import { ExamResultComponent } from './views/exam-result/exam-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddGroupComponent } from './views/add-group/add-group.component';
import { JoinGroupComponent } from './views/join-group/join-group.component';
import { GroupComponent } from './views/group/group.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ResultsComponent } from './views/results/results.component';
import { QrcodeComponent } from './views/qrcode/qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AddExamComponent,
    AddQuestionComponent,
    ExamComponent,
    ExamResultComponent,
    AddGroupComponent,
    JoinGroupComponent,
    GroupComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileComponent,
    ResultsComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    QRCodeModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
