import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
// isLoggedIn: boolean = localStorage.userId > 0;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );


  constructor(private breakpointObserver: BreakpointObserver, private router:Router) { }

  ngOnInit(): void {
  }

    logout(){
      localStorage.clear();
      this.router.navigate([''])
    }

}
