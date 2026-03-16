import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //declare Signal
  protected readonly title = signal('meu-primer-angular');
  
  //method to update Signal
  changeTitle() {
    this.title.set('Títol Canviat per Signal!'); // Utilitzar .set() per actualitzar la Signal
  }
}
