import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-something-went-wrong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="error">
      <h3>ERROR</h3>
      <span>Things are <span>not yes</span> here 🤷‍♂️</span>
      <p>Come back later!</p>
    </div>
  `,
  styles: `
    @use "../../styles/variables" as *;
    .error {
      min-width: 300px;
      padding: $space-md;
      border: 4px solid $color-primary;
      border-radius: $space-md;
      h3 {
        margin: 0;
        text-align: center;
      }
      span {
        span {
          color: $color-gray-100;
        }
      }
      p, span {
        font-size: $font-size-lg;
      }
      p {
        display: block;
        text-align: center;
        margin: $space-md 0 0;
      }
    }
  `,
})
export class SomethingWentWrong {}
