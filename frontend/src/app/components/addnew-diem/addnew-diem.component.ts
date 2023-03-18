import { Component, OnInit } from '@angular/core';
import { ApiserviceDiemService } from 'src/app/apiservice-diem.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnew-diem',
  templateUrl: './addnew-diem.component.html',
  styleUrls: ['./addnew-diem.component.css']
})
export class AddnewDiemComponent implements OnInit {

  constructor(private service:ApiserviceDiemService) { }

  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
  }

  diemForm = new FormGroup({
    'mssv': new FormControl('',Validators.required),
    'ten': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'mamh': new FormControl('',Validators.required),
    'diem': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
});

diemSubmit()
 {
  if(this.diemForm.valid)
 {
   console.log(this.diemForm.value);
   this.service.createData(this.diemForm.value).subscribe((res)=>{
     console.log(res, 'res==>');
     this.diemForm.reset();
     this.successmsg = 'Thêm thông tin điểm thành công';
   });

 }
 else
 {
   this.errormsg = 'Thêm điểm không thành công!'
 }
}

}
