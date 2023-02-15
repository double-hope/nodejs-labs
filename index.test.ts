import { findMedianSortedArrays, firstMissingPositive, isValid } from './index';
import { describe, expect } from '@jest/globals';

describe('findMedianSortedArrays function:', () => {
    it('should return 2 as a median of arrays [1, 3] and [2]', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    });

    it('should return 2.5 as a median of arrays [1, 3] and [2, 4]', () => {
        expect(findMedianSortedArrays([1, 3], [2, 4])).toEqual(2.5);
    });
});

describe('firstMissingPositive function:', () => {
    it('should return 1 as a first positive of array [-1, 4, 5, 0]', () => {
        expect(firstMissingPositive([-1, 4, 5, 0])).toBe(1);
    });

    it('should return 3 as a first positive of array [2, 0, 1]', () => {
        expect(firstMissingPositive([2, 0, 1])).toEqual(3);
    });
});


describe('isValid function:', () => {
    it('should return true of valid brackets \'()\'', () => {
        expect(isValid('()')).toBeTruthy;
    });

    it('should return true of valid brackets \'()()[]{}\'', () => {
        expect(isValid('()()[]{}')).toBeTruthy;
    });

    it('should return true of valid brackets \'(()())[][{()}]\'', () => {
        expect(isValid('(()())[][{()}]')).toBeTruthy;
    });

    it('should return false of non valid brackets \'(]\'', () => {
        expect(isValid('(]')).toBeTruthy;
    });
});