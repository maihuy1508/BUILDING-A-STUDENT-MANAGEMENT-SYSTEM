import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceGiaovienService } from 'src/app/apiservice-giaovien.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-gv',
  templateUrl: './update-gv.component.html',
  styleUrls: ['./update-gv.component.css']
})
export class UpdateGvComponent implements OnInit {

  successmsg:any;
  errormsg:any;
  getparamgiaovien:any;

  constructor(private service:ApiserviceGiaovienService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamgiaovien = this.router.snapshot.paramMap.get('mgv');
    this.service.getSingleData(this.getparamgiaovien).subscribe((res)=>{
        console.log(res, 'res==>');
        this.giaovienForm.patchValue({
            tengv:res.data[0].tengv,
            mk:res.data[0].mk,
            mamh:res.data[0].mamh,
            ml:res.data[0].ml,
        });
    });
  }

  giaovienForm = new FormGroup({
    'mgv': new FormControl('',Validators.required),
    'tengv': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'mamh': new FormControl('',Validators.required),
    'ml': new FormControl('',Validators.required),
});

giaovienSubmit()
     {
      if(this.giaovienForm.valid)
     {
       console.log(this.giaovienForm.value);
       this.service.createData(this.giaovienForm.value).subscribe((res)=>{
         console.log(res, 'res==>');
         this.giaovienForm.reset();
         this.successmsg = res.message;
       });

     }
     else
     {
      this.errormsg = 'Thêm thông tin giáo viên không thành công';
     }
   }

// UpdateSV
userUpdate()
{
      console.log(this.giaovienForm.value,'updateform');

      if(this.giaovienForm.valid){

      }else{
          this.service.updateData(this.giaovienForm.value, this.getparamgiaovien).subscribe((res)=>{
              console.log(res,'Update thành công!');
          });
      }
} 
}
