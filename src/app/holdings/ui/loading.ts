import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader">
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </div>
  `,
  styles: `
    .loader {
      margin-top: calc(2 *  var(--space-xl));
      display: flex;
      justify-content: center;
      align-items: center;
      .bar {
        margin: var(--space-xs);
        width: var(--space-md);
        height: var(--space-xl);
        border: var(--space-xs) solid var(--color-primary);
        background-color: var(--color-black);
        animation: 1.5s infinite anim;
        &-2 {
          animation-delay: 0.25s;
        }
        &-3 {
          animation-delay: 0.5s;
        }
        @keyframes anim {
          0% {
            height: var(--space-lg);
          }
          25% {
            height: calc(2 * var(--space-xl));
          }
          50% {
            height: var(--space-md);
          }
          100% {
            height: var(--space-lg);
          }
        }
      }
    }
  `,
})
export class Loading {}
