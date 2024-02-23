import { __values } from 'tslib';
import { UserService } from './../service/user.service';
import { Component, Inject, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-craeteuser',
  templateUrl: './craeteuser.component.html',
  styleUrls: ['./craeteuser.component.css'],

})
export class CraeteuserComponent implements OnInit {

  constructor( private userService:UserService) { }
  @Input() val !: boolean
  
  ngOnInit(): void {
    this.edituser()
    console.log(this.val);
    
  }
  name:string = "";
  gender: string = "";
  subType: string  = "";
  status: string  = "";

  onCreate()
  {
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status)
    // console.log(this.userService.users);
  }

  edituser() {
    this.userService.OnUserEditclick.subscribe(res => {
      this.name = res.name;
      this.gender = res.gender;
      this.subType = res.subType;
      this.status = res.status;
    });
  }

  UpdateUserDetails(){
    this.val
   this.userService.EditUser(this.name! ,this.gender!,this.subType!,this.status!);
  this.name = this.gender = this.subType = this.status="";
   
  //  this.val=!this.val;
  
  }
}
