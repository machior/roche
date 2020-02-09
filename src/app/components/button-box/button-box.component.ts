import { Component, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent {
  @Input() data;
  @Input() isClickable = false;
  @Output() deleteItem = new EventEmitter();

  recoloured = false;

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elRef.nativeElement.contains(targetElement);
    if (clickedInside && this.isClickable) {
      this.recoloured = ! this.recoloured;
    }
  }

  constructor(private elRef: ElementRef) { }

  onButtonClick(): void {
    this.deleteItem.emit(this.data);
  }
}
