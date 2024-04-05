import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { SomethingComponent } from './components/something/something.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SomethingComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  someMessage: string = 'hello world';

  constructor(private router: Router) {

  }

  gotoSomePlace(): void {

    this.router.navigate(['about']);

  }



}
