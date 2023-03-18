import { Component, OnInit } from '@angular/core';
import { ApiserviceKhoaService } from 'src/app/apiservice-khoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-khoa',
  templateUrl: './khoa.component.html',
  styleUrls: ['./khoa.component.css']
})
export class KhoaComponent implements OnInit {

  constructor(private service:ApiserviceKhoaService, private Routes:ActivatedRoute) { }

  readData:any;

  ngOnInit(): void {
    
      this.service.getAllDataKhoa().subscribe((res)=>{
          console.log(res,"res==>");
          this.readData = res.data;
      });
  }

  //get deleted Khoa
  deleteMK(mk:any){
      console.log(mk,'deletemk==>');
      this.service.deletedData(mk).subscribe((res)=>{
          console.log(res, 'deleteres==>');
      })
  }

  // getData
  getAllDataKhoa(): void
  { 
    this.service.getAllDataKhoa().subscribe((res)=>{
        console.log(res,"res==>");
          this.readData = res.data;
    });
  }
  
  // get single data
  getSingleData(mk:any)
  {
    this.service.getSingleData(mk).subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
  });
  }
}
