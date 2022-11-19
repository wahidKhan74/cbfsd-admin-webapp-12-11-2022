import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList:any[] =[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {

    this.userService.getAll().subscribe((response:any ) => {
      this.usersList = response;
      // console.log(response);
    });

  }

}
