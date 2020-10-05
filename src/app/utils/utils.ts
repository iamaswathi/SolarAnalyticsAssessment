export default class Utils {

    /**
     * getUniqueValues - returns an array of unique values from an array
     * @param inputArray 
     */
    public static getUniqueValues (inputArray: string[]) : string[]{
        const tempArray = inputArray.filter((n, i) => 
            (inputArray.indexOf(n) === i && i !== null));
        const distinctArray = tempArray.filter(v => v !== '');
        return distinctArray;
    }

    /**
     * makeKeyValueJson - returns a JSON with key as key1 and value as key2.
     * a hashmap for faster lookup
     * @param theList 
     * @param key1 
     * @param key2 
     */
    public static makeKeyValueJson (theList: any[], key1: any, key2: any): any {
        let jsonObject = {};  
        theList.forEach(item => jsonObject[item[key1]] = item[key2]);
        console.log(jsonObject); 
        return jsonObject;
    }
}