import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  public users: User[] = [];
  
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      jobTitle: [''],
      phone: ['', [ Validators.pattern(/^[0-9]*$/)]],
      address: [''],
      dateOfBirth: [''],
    });
  }

  public onAddUser(addForm: NgForm): void {
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers(); 
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
