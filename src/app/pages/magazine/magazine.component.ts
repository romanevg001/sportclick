import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineComponent {
  title = 'sportclick';
}
