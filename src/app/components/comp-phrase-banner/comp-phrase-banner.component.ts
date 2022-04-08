import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-phrase-banner',
  templateUrl: './comp-phrase-banner.component.html',
  styleUrls: ['./comp-phrase-banner.component.scss'],
})
export class CompPhraseBannerComponent {
  @Input() info: any;
  public src = '../../../../../assets/images/banners/';
}
