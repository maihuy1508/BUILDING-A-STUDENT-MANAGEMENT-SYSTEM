import { Component, OnInit } from '@angular/core';
import { ApilophocService } from 'src/app/apilophoc.service';

@Component({
  selector: 'app-lophoc',
  templateUrl: './lophoc.component.html',
  styleUrls: ['./lophoc.component.css']
})
export class LophocComponent implements OnInit {

  constructor(private service:ApilophocService) { }

  readData:any;
  ngOnInit(): void {
    this.getAllDataLop();
  }

  // deleted lớp học
  deletedData(ml:any)
  {
    console.log(ml,'deletelh==>');
    this.service.deletedData(ml).subscribe((res)=>{
        console.log(res),'Deleteres==>';
        this.getAllDataLop();
    });
  }

  getAllDataLop(){
    this.service.getAllDataLop().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;

    }); 
  }

  // get single data
  getSingleData(ml:any)
  {
    this.service.getSingleData(ml).subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
  });
  }

}
