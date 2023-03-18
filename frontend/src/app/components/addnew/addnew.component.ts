import { BdtService } from './../../bdt.service';
import { ApiserviceKhoaService } from 'src/app/apiservice-khoa.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service'; 
import { ActivatedRoute, Routes } from '@angular/router';
import { MalopService } from './../../malop.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(private service:ApiserviceService,private _service:MalopService, private __service:ApiserviceKhoaService, private ___service:BdtService ,private router:ActivatedRoute) { }


  errormsg:any;
  successmsg:any;
  dataLop:any;
  readData:any;
  bdtData:any;

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('mssv'));
    this._service.getAllDatadlop().subscribe((res)=>{
      this.dataLop = res.data;
    });
    this.__service.getAllDataKhoa().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
    this.___service.getAllDatadbdt().subscribe((res)=>{
      console.log(res,"res==>");
      this.bdtData = res.data;
    }); 
    
  }

  sinhvienForm = new FormGroup({
    'mssv': new FormControl('',Validators.required),
    'ten': new FormControl('',Validators.required),
    'gioitinh': new FormControl('',Validators.required),
    'ml': new FormControl('',Validators.required),
    'gmail': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'diachi': new FormControl('',Validators.required),
    'ghichu': new FormControl('',Validators.required),
    'noisinh': new FormControl('',Validators.required),
    'bdt': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
});

  //Thêm sinh viên 
  sinhvienSubmit()
  {
      if(this.sinhvienForm.valid)
      {
        console.log(this.sinhvienForm.value);
        this.service.createData(this.sinhvienForm.value).subscribe((res)=>{
            console.log(res,'res==>')
            this.sinhvienForm.reset();
            this.successmsg = res.message;
        });
      }    
      else
      {
        this.errormsg = 'Hãy nhập thông tin sinh viên !';
      } 
  }

  // getData lớp
  getAllDatadlop(): void
  { 
    this._service.getAllDatadlop().subscribe((res)=>{
        console.log(res,"res==>");
          this.dataLop = res.data;
    });
  } 

  // gatData Khoa
 getAllDataKhoa(): void
 { 
   this.__service.getAllDataKhoa().subscribe((res)=>{
       console.log(res,"res==>");
         this.readData = res.data;
   });
 }

 // getData bậc đào tạo
 getAllDatadbdt(): void
 { 
   this.___service.getAllDatadbdt().subscribe((res)=>{
       console.log(res,"res==>");
         this.bdtData = res.data;
   });
 } 
 
}
