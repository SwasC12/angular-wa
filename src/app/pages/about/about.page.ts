import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  template: `<h2>nothing here go to jokes</h2>`
})
export class AboutPage implements OnInit, AfterContentInit {
 

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }



}
