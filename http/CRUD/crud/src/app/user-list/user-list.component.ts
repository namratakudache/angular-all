// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | undefined;
  isEditing = false;
  editedUser: User | undefined;
  newUser: User = { id: 0, name: '', email: '' }; // Default new user object

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  editUser(user: User): void {
    this.isEditing = true;
    this.editedUser = { ...user }; // Create a copy to edit separately
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedUser = undefined;
  }

  updateUser(): void {
    if (this.editedUser) {
      this.userService.updateUser(this.editedUser).subscribe((updatedUser) => {
        const index = this.users.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
          this.isEditing = false;
          this.editedUser = undefined;
        }
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

  createNewUser(): void {
    this.userService.addUser(this.newUser).subscribe((newUser) => {
      this.users.push(newUser);
      this.newUser = { id: 0, name: '', email: '' }; // Reset new user object
    });
  }
}
