import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css'],
})
export class LinkItemComponent {
  @Input() name: string = '';
  @Input() ref: string = '';
  @Input() isActive: boolean = false;
}
