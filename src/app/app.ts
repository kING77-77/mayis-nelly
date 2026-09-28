import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { Info } from './info/info';
import { Countdown } from './countdown/countdown';
import { CouplePhoto } from './couple-photo/couple-photo';
import { Rsvp } from './rsvp/rsvp';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hero, Info, Countdown, CouplePhoto, Rsvp, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
