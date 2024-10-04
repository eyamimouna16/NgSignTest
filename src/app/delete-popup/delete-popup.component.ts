import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  @Input() isVisible: boolean = false;
  @Input() userToDelete!: User | null;
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() confirmDelete: EventEmitter<number> = new EventEmitter();

  closePopup(): void {
    this.isVisible = false;
    this.close.emit(); 
  }

  onDeleteUser(): void {
    if (this.userToDelete) {
      this.confirmDelete.emit(this.userToDelete.id); 
      this.closePopup();
    }
  }
}
