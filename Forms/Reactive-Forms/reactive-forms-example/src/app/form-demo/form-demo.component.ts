// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form-demo',
//   templateUrl: './form-demo.component.html',
//   styleUrl: './form-demo.component.css',
// })
// export class FormDemoComponent {
//   myForm: FormGroup;
//   countries = ['India', 'Canada', 'Australia', 'USA'];
//   interests = ['Reading', 'Traveling', 'Sports'];
//   genders = ['Male', 'Female', 'Other'];
//   skills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue'];
//   constructor() {
//     this.myForm = new FormGroup({
//       name: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(3),
//       ]),
//       email: new FormControl(null, [
//         Validators.required,
//         Validators.email,
//         Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
//       ]),
//       password: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(6),
//       ]),
//       interests: new FormGroup({
//         reading: new FormControl(false),
//         traveling: new FormControl(false),
//         sports: new FormControl(false),
//       }),
//       gender: new FormControl(null, Validators.required),
//       skills: new FormControl(null),
//     });
//   }
//   // ngOnInit() {}
//   onSubmit() {
//     if (this.myForm.invalid) {
//       this.myForm.markAllAsTouched();
//       return;
//     }

//     alert('Form Submitted Successfully');
//     console.log('Form Submitted', this.myForm);
//     // Reset the form after submission
//     this.myForm.reset(); // This resets all form controls to their initial state
//   }
// }

//using form Builder

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
})
export class FormDemoComponent {
  myForm: FormGroup;
  countries = ['India', 'Canada', 'Australia', 'USA'];
  interests = ['Reading', 'Traveling', 'Sports'];
  genders = ['Male', 'Female', 'Other'];
  skills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue'];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      interests: this.fb.group({
        reading: [false],
        traveling: [false],
        sports: [false],
      }),
      gender: [null, Validators.required],
      skills: [null],
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    alert('Form Submitted Successfully');
    console.log('Form Submitted', this.myForm.value);
    // Reset the form after submission
    this.myForm.reset();
  }
}
