import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  public get isLoggedIn(): boolean{
    return this.authService.isAuthenticated();
  }

  ifUserAdmin: boolean = true;
  ifUserAuthorize: boolean = false ;

  ngOnInit(): void {
    this.ifUserAuthorize = this.isLoggedIn;
    this.ifUserAdmin = true;
  }

  logout(){
    this.authService.logout();
    // this.router.navigateByUrl('./header', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['Authorization/login']);
    // }); 
  }
}
