import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // public transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }

  // public transform(items: any[], searchText: string, fieldName: string): any[] {

  //   // return empty array if array is falsy
  //   if (!items) { return []; }

  //   // return the original array if search text is empty
  //   if (!searchText) { return items; }

  //   // convert the searchText to lower case
  //   searchText = searchText.toLowerCase();

  //   // retrun the filtered array
  //   return items.filter(item => {
  //     if (item && item[fieldName]) {
  //       return item[fieldName].toLowerCase().includes(searchText);
  //     }
  //     return false;
  //   });
  //  }

  transform(items: any[], arg1: string, arg2: string): any[]{
    if (items && items.length){
        return items.filter(item =>{
            if (arg1 && item.name.toLowerCase().indexOf(arg1.toLowerCase()) === -1){
                return false;
            }
            if (arg2 && item.region.toLowerCase().indexOf(arg2.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
    else{
        return items;
    }
}

}
