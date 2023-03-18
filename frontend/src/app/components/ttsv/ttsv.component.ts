import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ttsv',
  templateUrl: './ttsv.component.html',
  styleUrls: ['./ttsv.component.css']
})
export class TtsvComponent implements OnInit {

  constructor(private service:ApiserviceService, private Routes:ActivatedRoute) { }

  readData:any;
  successmsg:any;
  getparamid:any;
  getparammssv:any;

  ngOnInit(): void {
    this.getparammssv = this.Routes.snapshot.paramMap.get('mssv');
    this.service.getSingleData(this.getparammssv).subscribe((res)=>{
        console.log(res,'res==>');
        this.readData = res.data;
    });
  }

  sinhvienForm = new FormGroup({
    'mssv': new FormControl('',Validators.required),
    'ten': new FormControl('',Validators.required),
    'gioitinh': new FormControl('',Validators.required),
    'ml': new FormControl('',Validators.required),
    'gmail': new FormControl('',Validators.required),
    'mk': new FormControl('',Validators.required),
    'diachi': new FormControl('',Validators.required),
    'ghichu': new FormControl('',Validators.required),
    'noisinh': new FormControl('',Validators.required),
    'bdt': new FormControl('',Validators.required),
    'stc': new FormControl('',Validators.required),
});

  getAllDataSV(): void
  { 
    this.service.getAllDataSV().subscribe((res)=>{
        console.log(res,"res==>");
          this.readData = res.data;
    });
  }

  // get single data
  getSingleData(mssv:any)
  {
    this.service.getSingleData(mssv).subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
  });
  }

}
