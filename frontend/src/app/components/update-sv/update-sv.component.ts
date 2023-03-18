import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';

@Component({
  selector: 'app-update-sv',
  templateUrl: './update-sv.component.html',
  styleUrls: ['./update-sv.component.css']
})
export class UpdateSVComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  getparammssv:any;
  errormsg:any;
  successmsg:any;
  

  ngOnInit(): void {
    this.getparammssv = this.router.snapshot.paramMap.get('mssv');
    this.service.getSingleData(this.getparammssv).subscribe((res)=>{
      console.log(res,'res==>');
      this.sinhvienForm.patchValue({
          ten:res.data[0].ten,
          gioitinh:res.data[0].gioitinh,
          ml:res.data[0].ml,
          gmail:res.data[0].gmail,
          mk:res.data[0].mk,
          diachi:res.data[0].diachi,
          noisinh:res.data[0].noisinh,
          bdt:res.data[0].bdt,
          stc:res.data[0].stc,
          ghichu:res.data[0].ghichu, 
      });
  });
  }
  
  sinhvienForm = new FormGroup({
    'mssv':  new FormControl('',Validators.required),
    'ten': new FormControl('',Validators.required),
    'gioitinh': new FormControl('',Validators.required),
    'ml': new FormControl('',Validators.required),
    'gmail': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'diachi': new FormControl('',Validators.required),
    'noisinh': new FormControl('',Validators.required), 
    'bdt': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
    'ghichu': new FormControl('',Validators.required),
  });

  
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
        this.successmsg = 'Update thành công thông tin sinh viên';
      } 
  }

  // UpdateSV
  userUpdate()
  {
      console.log(this.sinhvienForm.value,'updateform');

      if(this.sinhvienForm.valid){

      }else{
          this.service.updateData(this.sinhvienForm.value, this.getparammssv).subscribe((res)=>{
              console.log(res,'Update SV thành công');
          });
      }
  } 
}
