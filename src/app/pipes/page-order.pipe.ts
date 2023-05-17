import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageOrder'
})
export class PageOrderPipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!value) return [];
    return value.sort((a, b) => a.value.order - b.value.order);
  }
}
