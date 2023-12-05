import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorir'
})
export class ColorirPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    let styledText = `<span style="color: green">${value}</span>`;
    if (value === 'PERDEU') {
      styledText = `<span style="color: red">${value}</span>`;
    }
    
    return this.sanitizer.bypassSecurityTrustHtml(styledText);
  }
}
