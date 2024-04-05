import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage  {
 




}
