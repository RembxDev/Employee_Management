import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly faTruckFast = faTruckFast;
  protected readonly faXTwitter = faXTwitter;
  protected readonly faYoutube = faYoutube;
  protected readonly faFacebook = faFacebook;
}
