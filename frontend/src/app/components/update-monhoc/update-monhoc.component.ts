import { ApiserviceMonhocService } from './../../apiservice-monhoc.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-monhoc',
  templateUrl: './update-monhoc.component.html',
  styleUrls: ['./update-monhoc.component.css']
})
export class UpdateMonhocComponent implements OnInit {

  constructor(private service:ApiserviceMonhocService, private router:ActivatedRoute) { }

  getparammonhoc:any;
  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
    this.getparammonhoc = this.router.snapshot.paramMap.get('mamh');
    this.service.getSingleData(this.getparammonhoc).subscribe((res)=>{
        console.log(res, 'res==>');
        this.monhocForm.patchValue({
          tenmh:res.data[0].tenmh,
          mk:res.data[0].mk,
          soLopHoc:res.data[0].soLopHoc,
          stc:res.data[0].stc,
        });
    });
  }

  monhocForm = new FormGroup({
    'mamh': new FormControl('',Validators.required),
    'tenmh': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'soLopHoc': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
});

    monhocSubmit()
        {
        if(this.monhocForm.valid)
        {
          console.log(this.monhocForm.value);
          this.service.createData(this.monhocForm.value).subscribe((res)=>{
            console.log(res, 'res==>');
            this.monhocForm.reset();
            this.successmsg = res.message;
          });

        }
        else
        {
            this.successmsg = 'Thêm thông tin môn học thành công';
        }
        }

// Update Môn học
    userUpdate()
        {
        console.log(this.monhocForm.value,'updateform');

        if(this.monhocForm.valid){

        }else{
        this.service.updateData(this.monhocForm.value, this.getparammonhoc).subscribe((res)=>{
            console.log(res,'Update thành công!');
        });
        }
} 

  }

 