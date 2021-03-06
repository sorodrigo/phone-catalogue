import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss']
})
export class PhoneDetailComponentComponent {
  @Input() phone;
  constructor() { }

  getPhoneLink(name) {
    return `http://busqueda.fnac.es/SearchResult/ResultList.aspx?Search=${encodeURIComponent(name)}`;
  }
}
