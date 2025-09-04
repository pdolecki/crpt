import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notifications } from '../shared/data-access/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-wrapper" #notificationContainer>
      <router-outlet />
    </div>
  `,
  styles: `
    .page-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0 5rem;
    }
  `,
})
export class App implements OnInit {
  notificationContainer = viewChild.required('notificationContainer', {
    read: ViewContainerRef,
  });

  private readonly notifcations = inject(Notifications);

  ngOnInit(): void {
    this.notifcations.showNotification(
      this.notificationContainer(),
      'Information ',
      'This application is simply my portfolio tracker, nothing fancy to see here 😄',
      'info',
      10000
    );
  }
}
