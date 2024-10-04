import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  
  public isPopupVisible: boolean = false;
  public userToDelete!: User | null;
  selectedUser!: User | null;  
  isDetailsPopupVisible: boolean = false;  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  openPopup(user: User): void {
    this.userToDelete = user; 
    this.isPopupVisible = true; 
  }

  closePopup(): void {
    this.isPopupVisible = false; 
    this.userToDelete = null; 
  }

  onConfirmDelete(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.getUsers(); 
        this.closePopup(); 
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  viewUserDetails(user: User): void {
    this.selectedUser = user;
    this.isDetailsPopupVisible = true;
  }


  closeDetailsPopup(): void {
    this.isDetailsPopupVisible = false;
  }
}
