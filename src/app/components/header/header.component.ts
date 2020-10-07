import { Component } from '@angular/core';
import { ThemeService } from '../../common/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _themeService: ThemeService) {}

  /**
   * toggle - on clicking the Dark Mode option in the header,
   * the page theme toggles between light and dark mode.
   * It used the ThemeService to set the selected theme.
   */
  toggle() {
    const active = this._themeService.getActiveTheme() ;
    if (active.name === 'lightTheme') {
      this._themeService.setTheme('darkTheme');
    } else {
      this._themeService.setTheme('lightTheme');
    }
  }

}
