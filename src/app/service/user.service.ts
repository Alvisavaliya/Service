
import { User } from './../Model/User';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  index: number = 0
  OnUserEditclick: EventEmitter<User> = new EventEmitter<User>();
  OnUserDetailsclick: EventEmitter<User> = new EventEmitter<User>();

users:User[]=[
  new User('alvi','Female','Monthly','Active'),
  new User('aayush','Male','Yearly','Inactive'),
  new User('mahi','Female','Quaterly','Active'),
]

GetAllUser(){2
  return this.users;
}

CreateUser(name:string , gender:string , subType:string , status:string)
{
  let user =new User(name,gender,subType,status)
  this.users.push(user)
}


onEditUserDetails(user:User,i:number){
  this.OnUserEditclick.emit(user)
  console.log(user);
  this.OnUserEditclick.emit(user)
  this.index = i
}


onShowUserDetail(user:User){
  this.OnUserDetailsclick.emit(user)
}


EditUser(name:string,gender:string,subType:string,status:string)
{
  this.users[this.index].name=name;
  this.users[this.index].gender=gender;
  this.users[this.index].subType=subType;
  this.users[this.index].status=status
}

}
