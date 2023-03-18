import { UpdateLopComponent } from './components/update-lop/update-lop.component';
import { AddnewLopComponent } from './components/addnew-lop/addnew-lop.component';
import { ApiserviceService } from './apiservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinhvienComponent } from './components/sinhvien/sinhvien.component';
import { KhoaComponent } from './components/khoa/khoa.component';
import { MonhocComponent } from './components/monhoc/monhoc.component';
import { DiemComponent } from './components/diem/diem.component';
import { GiaovienComponent } from './components/giaovien/giaovien.component';
import { ModalsvComponent } from './components/modalsv/modalsv.component';
import { AccountComponent } from './components/account/account.component';
import { UpdateSVComponent } from './components/update-sv/update-sv.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import { AddnewKhoaComponent } from './components/addnew-khoa/addnew-khoa.component';
import { AddnewMonhocComponent } from './components/addnew-monhoc/addnew-monhoc.component';
import { AddnewDiemComponent } from './components/addnew-diem/addnew-diem.component';
import { AddnewGvComponent } from './components/addnew-gv/addnew-gv.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateKhoaComponent } from './components/update-khoa/update-khoa.component';
import { UpdateMonhocComponent } from './components/update-monhoc/update-monhoc.component';
import { UpdateDiemComponent } from './components/update-diem/update-diem.component';
import { TtsvComponent } from './components/ttsv/ttsv.component';
import { SignupComponent } from './components/signup/signup.component';
import { LophocComponent } from './components/lophoc/lophoc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SinhvienComponent,
    KhoaComponent,
    MonhocComponent,
    DiemComponent,
    GiaovienComponent,
    ModalsvComponent,
    AccountComponent,
    UpdateSVComponent,
    AddnewComponent,
    AddnewKhoaComponent,
    AddnewMonhocComponent,
    AddnewDiemComponent,
    AddnewGvComponent,
    UpdateKhoaComponent,
    UpdateMonhocComponent,
    UpdateDiemComponent,
    TtsvComponent,
    SignupComponent,
    LophocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
