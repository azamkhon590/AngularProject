import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
[x: string]: any;
  signup!:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router){}
  ngOnInit(): void {
    this.signup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  onSignup(){
    if(this.signup.valid){
      this.authService.signup(this.signup.value)
      .subscribe({
        next:(res=>{
          this.signup.reset();
          this.route.navigate(['login']);
        }),
        error:(err=>{
          alert(err.message);
        })
      });
      console.log(this.signup.value);
    }
    else{
      console.log('ErrorSignUp');
    }
  }

}
