import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApilophocService } from 'src/app/apilophoc.service';

@Component({
  selector: 'app-addnew-lop',
  templateUrl: './addnew-lop.component.html',
  styleUrls: ['./addnew-lop.component.css']
})
export class AddnewLopComponent implements OnInit {

  successmsg:any;
  errormsg:any;

  constructor(private service:ApilophocService) { }

  ngOnInit(): void {
  }

  lopForm = new FormGroup({
    'ml': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
});

lopSubmit()
 {
  if(this.lopForm.valid)
 {
   console.log(this.lopForm.value);
   this.service.createData(this.lopForm.value).subscribe((res)=>{
     console.log(res, 'res==>');
     this.lopForm.reset();
     this.successmsg = 'Thêm thông tin Khoa thành công';
   });

 }
 else
 {
   this.errormsg = 'Thêm Khoa không thành công!'
 }
}

}
