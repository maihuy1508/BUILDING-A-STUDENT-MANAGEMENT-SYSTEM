import { Component, OnInit } from '@angular/core';
import { ApiserviceDiemService } from 'src/app/apiservice-diem.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-update-diem',
  templateUrl: './update-diem.component.html',
  styleUrls: ['./update-diem.component.css']
})
export class UpdateDiemComponent implements OnInit {

  constructor(private service:ApiserviceDiemService, private router:ActivatedRoute) { }

  getparamdiem:any;
  errormsg:any;
  successmsg:any;

  ngOnInit(): void {
    this.getparamdiem = this.router.snapshot.paramMap.get('mssv');
    this.service.getSingleData(this.getparamdiem).subscribe((res)=>{
        console.log(res,'res==>');
        this.diemForm.patchValue({
          ten:res.data[0].ten,
          mk:res.data[0].mk,
          mamh:res.data[0].mamh,
          diem:res.data[0].diem,
          stc:res.data[0].stc,
        })
    });
  }

  diemForm = new FormGroup({
    'mssv': new FormControl('',Validators.required),
    'ten': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'mamh': new FormControl('',Validators.required),
    'diem': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
});

diemSubmit(){
  console.log(this.diemForm.value);
}

// UpdateSV
      userUpdate()
      {
          console.log(this.diemForm.value,'UpdateForm');

          if(this.diemForm.valid)
          {
                this.service.updateData(this.diemForm.value, this.getparamdiem).subscribe((res)=>{
                    console.log(res,'resupdated');
                    this.successmsg = res.message;
                });
          }else
          {
            this.errormsg ="Update không thành công";
          }
      } 

}
