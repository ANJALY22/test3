import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: String,name: string): unknown {
    return 'firstname:-'+name;
  }

}
