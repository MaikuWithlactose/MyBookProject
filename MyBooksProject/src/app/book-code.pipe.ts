import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {
  transform(id: number): string {
    const formattedId = String(id).padStart(6, '0');
    return `Ref-${formattedId}`;
  }
}
