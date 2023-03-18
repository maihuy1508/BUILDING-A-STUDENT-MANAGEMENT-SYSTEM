import { ApiserviceKhoaService } from 'src/app/apiservice-khoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-khoa',
  templateUrl: './update-khoa.component.html',
  styleUrls: ['./update-khoa.component.css']
})
export class UpdateKhoaComponent implements OnInit {

  constructor(private service:ApiserviceKhoaService, private router:ActivatedRoute) { }

  getparamkhoa:any;
  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
    this.getparamkhoa = this.router.snapshot.paramMap.get('mk');
    this.service.getSingleData(this.getparamkhoa).subscribe((res)=>{
        console.log(res, 'res==>');
        this.khoaForm.patchValue({
            tenkhoa:res.data[0].tenkhoa,
            solop:res.data[0].solop,
        });
    });
  }

  khoaForm = new FormGroup({
    'mk': new FormControl('',Validators.required),
    'tenkhoa': new FormControl('',Validators.required),
    'solop': new FormControl('',Validators.required),
});

khoaSubmit()
     {
      if(this.khoaForm.valid)
     {
       console.log(this.khoaForm.value);
       this.service.createData(this.khoaForm.value).subscribe((res)=>{
         console.log(res, 'res==>');
         this.khoaForm.reset();
         this.successmsg = res.message;
       });

     }
     else
     {
      this.successmsg = 'Thêm thông tin Khoa thành công';
     }
   }

// UpdateSV
userUpdate()
{
      console.log(this.khoaForm.value,'updateform');

      if(this.khoaForm.valid){

      }else{
          this.service.updateData(this.khoaForm.value, this.getparamkhoa).subscribe((res)=>{
              console.log(res,'Update thành công!');
          });
      }
} 
}
