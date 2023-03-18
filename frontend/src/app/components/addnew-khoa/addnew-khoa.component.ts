import { ApiserviceKhoaService } from 'src/app/apiservice-khoa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-addnew-khoa',
  templateUrl: './addnew-khoa.component.html',
  styleUrls: ['./addnew-khoa.component.css']
})
export class AddnewKhoaComponent implements OnInit {

  constructor(private service:ApiserviceKhoaService) { }

  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
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
         this.successmsg = 'Thêm thông tin Khoa thành công';
       });

     }
     else
     {
       this.errormsg = 'Thêm Khoa không thành công!'
     }
   }

}
