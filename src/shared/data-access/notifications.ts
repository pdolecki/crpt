import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Notification } from '../components/notification';

@Injectable({
  providedIn: 'root',
})
export class Notifications {
  private readonly notifications: ComponentRef<Notification>[] = [];

  showNotification(
    viewContainer: ViewContainerRef,
    title: string,
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    closeAfter: number = 5000
  ) {
    const componentRef = viewContainer.createComponent(Notification);
    componentRef.setInput('title', title);
    componentRef.setInput('message', message);
    componentRef.setInput('type', type);

    // Dismiss handler
    componentRef.instance.dismissed.subscribe(() => {
      this.dismissNotification(componentRef);
    });
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      this.dismissNotification(componentRef);
    }, closeAfter);

    this.notifications.push(componentRef);
    return componentRef;
  }

  private dismissNotification(componentRef: ComponentRef<Notification>) {
    const index = this.notifications.indexOf(componentRef);
    if (index > -1) {
      this.notifications.splice(index, 1);
      componentRef.destroy();
    }
  }
}
