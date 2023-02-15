// ----- 4. Median of Two Sorted Arrays -----

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    
    const index = Math.round(merged.length / 2);

    if(merged.length % 2 == 0) {
        return (merged[index] + merged[index - 1]) / 2;
    } else {        
        return merged[index - 1];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));