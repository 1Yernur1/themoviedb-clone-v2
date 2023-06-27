import { Component } from '@angular/core';
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faPlus = faPlus;
  faBell = faBell;
}
