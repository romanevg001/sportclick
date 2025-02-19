import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagazineComponent {
  title = 'sportclick';
}
