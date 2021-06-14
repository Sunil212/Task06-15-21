import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, description: string): string {
    return 'Type of Spectacle:' + description;
  }

}
