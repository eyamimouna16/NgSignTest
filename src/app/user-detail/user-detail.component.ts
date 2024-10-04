import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() userDetails!: User | null; 
  @Output() close: EventEmitter<void> = new EventEmitter();

  closePopup(): void {
    this.isVisible = false;
    this.close.emit();
  }
  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
   
  }
}
