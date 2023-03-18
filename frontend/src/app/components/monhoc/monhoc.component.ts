import { ApiserviceMonhocService } from './../../apiservice-monhoc.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {

  constructor(private service:ApiserviceMonhocService) { }

  readData:any;

  ngOnInit(): void {
      this.getAllData();
  }

  // deleted môn học
  deleteMH(mamh:any)
  {
    console.log(mamh,'deletemh==>');
    this.service.deleteData(mamh).subscribe((res)=>{
        console.log(res),'Deleteres==>';
        this.getAllData();
    });
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;

    }); 
  }

  // get single data
  getSingleData(mamh:any)
  {
    this.service.getSingleData(mamh).subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
  });
  }

}
