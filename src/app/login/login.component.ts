import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  [x: string]: any;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.loginForm.reset();
          this.route.navigate(['/']);
        },
        error:(err)=> {
          alert(err.error.message);
        }
      });
    }
    else{
      console.log('ErrorLogin');
    }
  }
  
}
