import { ApiserviceGiaovienService } from './../../apiservice-giaovien.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.css']
})
export class GiaovienComponent implements OnInit {

  constructor(private service:ApiserviceGiaovienService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
      this.getAllDatagiaovien();
  }

    //get deleted Khoa
  deleteGV(mgv:any){
    console.log(mgv,'deletemgv==>');
    this.service.deletedData(mgv).subscribe((res)=>{
        console.log(res, 'deleteres==>');
        this.getAllDatagiaovien();
      
    })
}

  //get all data
  getAllDatagiaovien():void
    {
      this.service.getAllDatagiaovien().subscribe((res)=>{
        console.log(res,"res==>");
          this.readData = res.data;
    });
    }
        

}
