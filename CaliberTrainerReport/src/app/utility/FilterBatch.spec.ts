import { FilterBatch } from './FilterBatch'

let anyArray:any[] = ['1', 2, '3', 4, 5, '6'];
let trueBatch:boolean[] = [true, true, true, true, true, true];
let falseBatch:boolean[] = [false, false, false, false, false, false];
let fourTrueBatch:boolean[] = [false, true, false, true, true, true];
let diffLenBatch:boolean[] = [true, false];
let filter: FilterBatch = new FilterBatch();

describe('filters batches', () => {
    it('should return the full array when all batches are true.', () => {
        expect(filter.filterBatch(anyArray, trueBatch).length).toEqual(6);
    });

    it('should return an empty array when all batches are false', () => {
        expect(filter.filterBatch(anyArray, falseBatch).length).toEqual(0);
    });

    it('should return an any[] array of size 4 when only 4 batches are true', () => {
        expect(filter.filterBatch(anyArray, fourTrueBatch).length).toEqual(4);
    });

    it('should return an empty array if the two arrays provided are of different length', () => {
        expect(filter.filterBatch(anyArray, diffLenBatch).length).toEqual(0);
    });
})
