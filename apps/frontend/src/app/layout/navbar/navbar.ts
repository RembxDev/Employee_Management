import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBuilding, faDashboard, faHome, faUsers, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FaIconComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  protected readonly faHome = faHome;
  protected readonly faUsers = faUsers;
  protected readonly faBuilding = faBuilding;
  protected readonly faDashboard = faDashboard;
  protected readonly faSignInAlt = faSignInAlt;
  protected readonly faSignOutAlt = faSignOutAlt;

  isLoggedIn = false;
}
