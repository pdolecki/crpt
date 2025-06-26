import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loader">
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </div>
  `,
  styles: `
    @use "../../styles/variables" as *;
    .loader{
      margin-top: calc(2 * $space-xl);
      display: flex;
      justify-content: center;
      align-items: center;
      .bar{
        margin: $space-xs;
        width: $space-md;
        height: $space-xl;
        border: $space-xs solid $color-primary;
        background-color: $color-black;
        animation: 1.5s infinite anim;
        &-2 {
          animation-delay: 0.25s
        }
        &-3 {
          animation-delay: 0.5s
        }
        @keyframes anim{
            0% {height: $space-lg}
            25% {height: calc(2 * $space-xl)}
            50% {height: $space-md}
            100% {height: $space-lg}
        }
      }
    }
  `,
})
export class Loading {}
