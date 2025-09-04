import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [CommonModule],
  template: `
    <div
      class="notification"
      animate.enter="enter-animation"
      [ngClass]="'notification--' + type"
    >
      <h3 class="notification__header">
        <h4 class="notification__header--title">{{ title() }}</h4>
        <button class="notification__header--close" (click)="dismissed.emit()">
          ✕
        </button>
      </h3>
      <p class="notification__message">{{ message() }}</p>
    </div>
  `,
  styles: [
    `
      .notification {
        position: fixed;
        top: 1rem;
        right: 1rem;
        color: var(--color-white);
        background-color: var(--color-black);
        border: 2px solid var(--color-white);
        border-radius: 10px;
        padding: 0.5rem 1rem;
        max-width: 400px;
        &--success {
          color: var(--color-green);
          background-color: var(--color-green);
        }
        &--error {
          color: var(--color-red);
          background-color: var(--color-red);
        }
        &--warning {
          color: var(--color-yellow);
          background-color: var(--color-yellow);
        }
        &__header {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &--title {
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 4px;
          }
          &--close {
            border: none;
            color: inherit;
            background-color: transparent;
            padding: 5px;
            cursor: pointer;
            font-size: 1.5rem;
          }
        }
        &__message {
          font-size: 1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      }
      .enter-animation {
        animation: slide-fade 1s;
      }
      @keyframes slide-fade {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class Notification {
  readonly type = input.required<'success' | 'error' | 'warning' | 'info'>();
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  readonly dismissed = output<void>();
}
