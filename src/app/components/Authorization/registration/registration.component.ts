import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  passwordConfirmFormControl = new FormControl('', [Validators.required]);
  
  public get isLoggedIn(): boolean{
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    if(this.isLoggedIn){
      this.router.navigate(['/']);
    }
  }

  registration(email: string | null, password: string | null, passwordConfirm: string | null){
    this.authService.registration(email, password, passwordConfirm).subscribe(res => {
    }, error => {
      alert("Wrong login or password")
    });
  }
}