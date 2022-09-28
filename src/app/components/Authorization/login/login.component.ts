import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnChanges {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]),[A-Za-z\d$@$!%*?&].{8,}'),
      Validators.minLength(8),
      Validators.maxLength(20),
    ]);
  matcher = new MyErrorStateMatcher();

  public get isLoggedIn(): boolean{
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    if(this.isLoggedIn){
      this.router.navigate(['/']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['isLoggedIn']){
      console.log(this.isLoggedIn);
    }
  }

  login(email: string | null, password: string | null): void{
    this.authService.login(email, password)
      .subscribe(res => {
      }, error => {
        alert("Wrong login or password")
      });
    
    // this.router.navigateByUrl('./header', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['Authorization/login']);
    // }); 
  }

  logout(){
    this.authService.logout();
  }
}