export class User {
  name: string = '';
  email: string = '';
  phone: string = '';
  salary: string = '';
  description: string = '';
  gender: string = '';
  country: string = '';
  agree: boolean = false;
  selectedSkills: string[] = [];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  } = { street: '', city: '', state: '', zip: '' };
}
