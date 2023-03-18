import { ApiserviceMonhocService } from './../../apiservice-monhoc.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addnew-monhoc',
  templateUrl: './addnew-monhoc.component.html',
  styleUrls: ['./addnew-monhoc.component.css']
})
export class AddnewMonhocComponent implements OnInit {

  constructor(private service:ApiserviceMonhocService) { }

  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
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
            this.successmsg = "Thêm thông tin môn học thành công";
        });
      }
      else
      {
        this.errormsg = 'Không thành công !';
      }
  }

}
