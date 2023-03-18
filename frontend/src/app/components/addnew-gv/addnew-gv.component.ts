import { ApiserviceGiaovienService } from './../../apiservice-giaovien.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addnew-gv',
  templateUrl: './addnew-gv.component.html',
  styleUrls: ['./addnew-gv.component.css']
})
export class AddnewGvComponent implements OnInit {

  constructor(private service: ApiserviceGiaovienService) { }

  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
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
     this.successmsg = 'Thêm thông tin giáo viên thành công';
   });

 }
 else
 {
   this.errormsg = 'Thêm giáo viên không thành công!'
 }
}

}
