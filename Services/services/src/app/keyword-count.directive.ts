import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appKeywordCount]',
})
export class KeywordCountDirective implements OnChanges {
  @Input() keyword!: string;
  @Input() text!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateCount();
  }

  updateCount() {
    if (!this.keyword || !this.text) {
      return;
    }

    const keywordRegex = new RegExp(this.keyword, 'gi');
    const count = (this.text.match(keywordRegex) || []).length;

    const displayText = `${this.text} (Keyword "${this.keyword}" found ${count} times)`;
    this.renderer.setProperty(
      this.el.nativeElement,
      'textContent',
      displayText
    );
  }
}
