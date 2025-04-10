import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  headerState = '*';

  ngOnInit(): void {
    this.isLoggedIn = true;
  }

  ngOnDestroy(): void {
    // No cleanup needed
  }
}
