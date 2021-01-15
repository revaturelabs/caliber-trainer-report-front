import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('will return an empty array because of invalid input', () => {
    const pipe = new FilterPipe();
    const validArray = ['hello'];
    const invalidArray = [];
    let validString:string = 'hello';
    let emptyString:string = '';
    let nullString:string;

    expect(pipe.transform(validArray, emptyString)).toEqual([]);
    expect(pipe.transform(validArray, nullString)).toEqual([]);
    expect(pipe.transform(invalidArray, validString)).toEqual([]);
    expect(pipe.transform(invalidArray, emptyString)).toEqual([]);
    expect(pipe.transform(invalidArray, nullString)).toEqual([]);
  });

  it('will return an empty array from successful filtering', () => {
    const pipe = new FilterPipe();
    const validArray = ['hello'];
    let invalidString:string = 'world';
    
    expect(pipe.transform(validArray, invalidString)).toEqual([]);
  });

  it('will return a filled array from successful filtering', () => {
    const pipe = new FilterPipe();
    const array = ['hello', 'world', 'Something', 'else'];
    let helloStr:string = 'hello';
    let worldStr:string = 'world';
    let somethingStr:string = 'something';
    let elseStr:string = 'ELSE';

    expect(pipe.transform(array, helloStr)).toEqual(['hello']);
    expect(pipe.transform(array, worldStr)).toEqual(['world']);
    expect(pipe.transform(array, somethingStr)).toEqual(['Something']);
    expect(pipe.transform(array, elseStr)).toEqual(['else']);
  });
});
