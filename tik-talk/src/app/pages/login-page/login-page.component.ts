import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { signal } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService)
  router = inject(Router)
  isPasswordVisible = signal(false)
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  onSubmit (event: Event) {
    if(this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value)
      .subscribe(res => {this.router.navigate([''])
      console.log(res)})
      
      }
    }

    
  }

