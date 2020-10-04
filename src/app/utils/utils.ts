export default class Utils {
    public static getUniqueValues (inputArray: string[]) : string[]{
        const tempArray = inputArray.filter((n, i) => 
            (inputArray.indexOf(n) === i && i !== null));
        const distinctArray = tempArray.filter(v => v !== '');
        return distinctArray;
    }
}