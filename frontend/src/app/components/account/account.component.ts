import { Router } from '@angular/router';
import { AuthServiceService } from './../../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  formGroup: FormGroup;
  constructor(private authService:AuthServiceService, private router: Router ) { }

  ngOnInit(): void {
      this.initForm();
  }
  
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
          if(result.success){
            console.log(result);
            alert(result.message);
            this.router.navigate(['/']);
          }else{
            alert(result.message);
          }
      });
    }
  }
  } 

