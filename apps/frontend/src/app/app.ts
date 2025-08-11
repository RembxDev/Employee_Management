import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';


@Component({
  imports: [RouterModule, Navbar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'frontend';
}


