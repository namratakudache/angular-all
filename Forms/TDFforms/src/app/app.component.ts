import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  salary: string = '';
  gender: string = '';
  country: string = '';
  agree: boolean = false;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React'];
  selectedSkills: string[] = [];
  address = {
    street: '',
    city: '',
    state: '',
    zip: '',
  };

  onSubmit() {
    console.log('Form submitted', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      country: this.country,
      agree: this.agree,
      selectedSkills: this.selectedSkills,
      address: this.address,
    });
    alert('Form submitted successfully!');
  }
  myUser = new User();

  constructor() {
    this.myUser.selectedSkills = []; // Initialize selectedSkills array
  }

  toggleSkill(skill: string) {
    if (this.myUser.selectedSkills.includes(skill)) {
      // Skill is already selected, remove it
      this.myUser.selectedSkills = this.myUser.selectedSkills.filter(
        (item) => item !== skill
      );
    } else {
      // Skill is not selected, add it
      this.myUser.selectedSkills.push(skill);
    }
  }
}
