import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'danish',
  standalone: true,
  imports: [RouterOutlet ,SliderComponent ,ProductComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DanishAsif';
}
