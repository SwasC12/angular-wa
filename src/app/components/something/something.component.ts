import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-something',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './something.component.html',
  styleUrl: './something.component.css'
})
export class SomethingComponent implements OnInit, AfterContentInit {

  @Input() message: string = 'Da message';

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }



}
