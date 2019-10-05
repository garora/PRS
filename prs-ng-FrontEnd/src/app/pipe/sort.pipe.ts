import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {  // just a class implementing interface PipeTransform for sorting

  transform(value: any, args?: any): any {    // method to implement - accepts value of anytime and returns value of any type
    const arrObjects = value;
    const column = args;    //// (extra) have to build into method what type you want to start

    return arrObjects.sort((a, b) => {
      let result = 0;
      if (a[column] > b[column]) {    // value and arguments are passed in and then it can sort
        result = 1;
      } else if (a[column] < b[column]) {
        result = -1;
      }
      return result;
    });
  }
}
