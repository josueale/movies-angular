import { Component, Input } from '@angular/core';
import { Item } from 'src/types/main';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent {
  @Input() item!: Item;

}
