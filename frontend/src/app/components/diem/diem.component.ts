import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceDiemService } from 'src/app/apiservice-diem.service';

@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {

  constructor(private service:ApiserviceDiemService, private Routes:ActivatedRoute) { }

  readData:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getAllDatadiem();
  }

  // get delete 
  deleteMSSV(mssv:any){
    console.log(mssv,'deletemssv==>');
    this.service.deletedData(mssv).subscribe((res)=>{
        console.log(res,'deleteres==>');
        this.getAllDatadiem();
    });
  }

  // getData
  getAllDatadiem(): void
  { 
    this.service.getAllDatadiem().subscribe((res)=>{
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
