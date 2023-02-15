// ----- 4. Median of Two Sorted Arrays -----
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedianSortedArrays(nums1, nums2) {
    var merged = __spreadArray(__spreadArray([], nums1, true), nums2, true);
    merged.sort(function (a, b) { return a - b; });
    var index = Math.floor(merged.length / 2);
    if (merged.length % 2 == 0) {
        return (merged[index] + merged[index + 1]) / 2;
    }
    else {
        return merged[index];
    }
}
;
// ----- 41. First Missing Positive -----
function firstMissingPositive(nums) {
    nums.sort(function (a, b) { return a - b; });
    var index = 1;
    nums.forEach(function (elem) { return elem === index ? index++ : null; });
    console.log(index);
    return 0;
}
;
firstMissingPositive([7, 8, 9, 11, 12]);
