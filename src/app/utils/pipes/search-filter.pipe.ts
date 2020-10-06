import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    /**
     * Returns an filtered array of items from the initial array based on 
     * the arguments in arg1 and arg2 
     * @param items 
     * @param arg1 
     * @param arg2 
     */
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
