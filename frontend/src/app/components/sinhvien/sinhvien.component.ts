
import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {

  constructor(private service:ApiserviceService, private Routes:ActivatedRoute) { }

  readData:any;
  successmsg:any;
  getparamid:any;
  dataLop:any;

  ngOnInit(): void {
     this.getAllDataSV();
    
  }

  // get delete 
  deleteID(mssv:any){
    console.log(mssv,'deletemssv==>');
    this.service.deletedData(mssv).subscribe((res)=>{
        console.log(res,'deleteres==>');
        this.getAllDataSV();
    });
  }

  // getData
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





