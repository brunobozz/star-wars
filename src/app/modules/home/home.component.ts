import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public darthVader: any = {
    author: 'Darth Wader',
    content: 'Sua falta de fé é perturbadora',
    image: '01.jpg',
    side: 'letf',
  };
}
