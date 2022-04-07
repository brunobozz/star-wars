import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-info-banner',
  templateUrl: './comp-info-banner.component.html',
  styleUrls: ['./comp-info-banner.component.scss'],
})
export class CompInfoBannerComponent {
  @Input() info: any;
  public src = '../../../../../assets/images/banners/';
}
