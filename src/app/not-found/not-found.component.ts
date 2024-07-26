import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'sw-not-found',
  standalone: true,
  imports: [RouterLink, MatAnchor, MatIcon],
  template: `
      <h4>Invalid route.</h4>
      <a  color="primary" routerLink="/">
        Home
      </a>
    `,
  styleUrl: './not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent { }