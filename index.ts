// ----- 4. Median of Two Sorted Arrays -----

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    
    const index = Math.round(merged.length / 2);

    if(merged.length % 2 == 0) {
        return (merged[index] + merged[index - 1]) / 2;
    } else {        
        return merged[index - 1];
    }
};


// ----- 41. First Missing Positive -----

const firstMissingPositive = (nums: number[]): number => {
    nums.sort((a, b) => a - b);
    let index = 1;
    nums.forEach((elem) => elem === index ? index++ : null);
    return index;
};


// ----- 20. Valid Parentheses -----

const isValid = (s: string): boolean => {
    const parent = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];

    for(let i = 0; i < s.length; i++){
         if(parent[s[i]]) {
            if(!stack || stack[stack.length - 1] !== parent[s[i]]) return false;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return !stack.length;
};

export { findMedianSortedArrays, firstMissingPositive, isValid };