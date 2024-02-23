
import { User } from './../Model/User';
import { UserService } from './../service/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers:[UserService]
})
export class UserlistComponent implements OnInit {
  constructor(private UserService:UserService) {
   }
  userList= this.UserService.GetAllUser();
  ngOnInit(): void {
  }
  deletebtn(name:string){
    for(let i=0;i<this.userList.length;i++)
    {
      if(this.userList[i].name===name)
      {
        this.userList.splice(i,1)
        Swal.fire(
          {
            title:"Deleted !",
            text:"Delete Record SuccessFully!",
            icon:"success"
          }
        );
        alert("data Delated..");
      }
      }
  }
  EditUserDetails(data:User,i:number){
    console.log(data);
    this.UserService.onEditUserDetails(data, i);
  }
  showUserDetail(user:User){
    this.UserService.onShowUserDetail(user);
    console.log(user);
  }
}
