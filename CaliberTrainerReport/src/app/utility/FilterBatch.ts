export class FilterBatch {
    
  // takes any[] and boolean[] which are of EQUAL LENGTH
  // checks in the boolean[] if a index has true or false value
  // if the index has true value, then the value from any[] at that index is pushed to temp:any[]
  // if false, nothing is done
  // returns temp
  public filterBatch(arr: any[], batchFlags: boolean[]): any[] {
      let temp: any[] = [];

      if (arr.length === batchFlags.length) {
        for (let i = 0; i < batchFlags.length; i++) {
            if (batchFlags[i]) {
                temp.push(arr[i]);
            }
        }
      }
      
      return temp;
  }
}