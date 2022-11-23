import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public name: string = "";
  // public email: string = "";
  // public password: string = "";
  // public confirmPassword: string = "";
  // public passwordError: boolean = false;

  userControl: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  },
  
  );

  constructor(public userService: UsersService, public router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userControl  = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [RegisterComponent.MatchValidator('password', 'repeatPassword')]
      }
    );
  }

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  get passwordMatchError() {
    return (
      this.userControl.getError('mismatch') &&
      this.userControl.get('repeatPassword')?.touched
    );
  }

  register() {
    // const user = {name: this.name, email: this.email, password: this.password};    
    this.userService.register(this.userControl.value).subscribe({
      next: (data) => {
        this.userService.setToken(data.token);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Subido a la base de datos con éxito");     
        this.router.navigateByUrl('/login');
      }
    })
  }

  onSubmit() {
    console.warn(this.userControl.value);
    this.register();
  }

}