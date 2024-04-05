import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.css'],
  imports: [FormsModule, CommonModule]
})
export class PracticePage {
  joke: any;
  selectedCategory: string = 'any';
  selectedLanguage: string = 'en'; // Default language
  flag: string = 'none';

  constructor(private http: HttpClient) {}

  getJoke() {
    let apiUrl = `https://v2.jokeapi.dev/joke/${this.selectedCategory}?lang=${this.selectedLanguage}`;
    if (this.flag !== 'none') {
      apiUrl += `&blacklistFlags=${this.flag}`;
    }
    this.http.get<any>(apiUrl).subscribe({
      next: (data) => {
        if (data.type === 'twopart') {
          this.joke = { setup: data.setup, delivery: data.delivery };
        } else {
          this.joke = { setup: 'Joke:', delivery: data.joke };
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
