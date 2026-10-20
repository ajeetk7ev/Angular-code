import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-home',
  imports: [Header, Hero, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
