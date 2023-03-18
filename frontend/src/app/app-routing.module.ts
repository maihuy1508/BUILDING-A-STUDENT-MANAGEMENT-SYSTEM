import { LophocComponent } from './components/lophoc/lophoc.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateLopComponent } from './components/update-lop/update-lop.component';
import { AddnewLopComponent } from './components/addnew-lop/addnew-lop.component';
import { TtsvComponent } from './components/ttsv/ttsv.component';
import { UpdateMonhocComponent } from './components/update-monhoc/update-monhoc.component';
import { UpdateKhoaComponent } from './components/update-khoa/update-khoa.component';
import { AddnewKhoaComponent } from './components/addnew-khoa/addnew-khoa.component';
import { AddnewMonhocComponent } from './components/addnew-monhoc/addnew-monhoc.component';
import { AddnewGvComponent } from './components/addnew-gv/addnew-gv.component';
import { AddnewDiemComponent } from './components/addnew-diem/addnew-diem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import { DiemComponent } from './components/diem/diem.component';
import { FooterComponent } from './components/footer/footer.component';
import { GiaovienComponent } from './components/giaovien/giaovien.component';
import { HeaderComponent } from './components/header/header.component';
import { KhoaComponent } from './components/khoa/khoa.component';
import { MainComponent } from './components/main/main.component';
import { ModalsvComponent } from './components/modalsv/modalsv.component';
import { MonhocComponent } from './components/monhoc/monhoc.component';
import { SinhvienComponent } from './components/sinhvien/sinhvien.component';
import { UpdateSVComponent } from './components/update-sv/update-sv.component';
import { UpdateDiemComponent } from './components/update-diem/update-diem.component';
import { UpdateGvComponent } from './components/update-gv/update-gv.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'sinhvien', component:SinhvienComponent},
  {path:'sinhvien/:mssv', component:SinhvienComponent},
  {path:'update-sv/:mssv', component:UpdateSVComponent},
  {path:'khoa', component:KhoaComponent},
  {path:'khoa/:mk', component:KhoaComponent},
  {path:'monhoc', component:MonhocComponent},
  {path:'monhoc/:mamh', component:MonhocComponent},
  {path:'diem', component:DiemComponent},
  {path:'diem/:mssv', component:DiemComponent},
  {path:'giaovien', component:GiaovienComponent},
  {path:'modalsv', component:ModalsvComponent},
  {path:'account', component:AccountComponent},
  {path:'update-sv', component:UpdateSVComponent},
  {path:'addnew', component:AddnewComponent},
  {path:'addnew-diem', component:AddnewDiemComponent},
  {path:'addnew-gv', component:AddnewGvComponent},
  {path:'addnew-khoa', component:AddnewKhoaComponent},
  {path:'addnew-monhoc', component:AddnewMonhocComponent},
  {path:'update-khoa', component:UpdateKhoaComponent},
  {path:'update-khoa/:mk', component:UpdateKhoaComponent},
  {path:'update-monhoc', component:UpdateMonhocComponent},
  {path:'update-monhoc/:mamh', component:UpdateMonhocComponent},
  {path:'update-diem', component:UpdateDiemComponent},
  {path:'update-diem/:mssv', component:UpdateDiemComponent},
  {path:'update-gv', component:UpdateGvComponent},
  {path:'update-gv/:mgv', component:UpdateGvComponent},
  {path:'ttsv', component:TtsvComponent},
  {path:'ttsv/:mssv', component:TtsvComponent},
  {path:'addnew-lop', component:AddnewLopComponent},
  {path:'update-lop', component:UpdateLopComponent},
  {path:'signup', component:SignupComponent},
  {path:'lophoc', component:LophocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
