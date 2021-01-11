import { FilterBatch } from './FilterBatch'

let anyArray:any[] = ['1', 2, '3', 4, 5, '6'];
let trueBatch:boolean[] = [true, true, true, true, true, true];
let falseBatch:boolean[] = [false, false, false, false, false, false];
let fourTrueBatch:boolean[] = [false, true, false, true, true, true];
let diffLenBatch:boolean[] = [true, false];
let filter: FilterBatch = new FilterBatch();

describe('filters truthful batch', () => {
    it('should return an any[] array of size 6.', () => {
        expect(filter.filterBatch(anyArray, trueBatch).length).toEqual(6);
    }) 
})

describe('filters false batch', () => {
    it('should return an empty array.', () => {
        expect(filter.filterBatch(anyArray, falseBatch).length).toEqual(0);
    })
})

describe('filters for four true values', () => {
    it('should return an any[] array of size 4.', () => {
        expect(filter.filterBatch(anyArray, fourTrueBatch).length).toEqual(4);
    })
})

describe('filter is given arrays of differing lengths', () => {
    it('should return an empty array.', () => {
        expect(filter.filterBatch(anyArray, diffLenBatch).length).toEqual(0);
    })
})