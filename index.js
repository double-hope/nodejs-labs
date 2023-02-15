"use strict";
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
exports.__esModule = true;
exports.isValid = exports.firstMissingPositive = exports.findMedianSortedArrays = void 0;
var findMedianSortedArrays = function (nums1, nums2) {
    var merged = __spreadArray(__spreadArray([], nums1, true), nums2, true);
    merged.sort(function (a, b) { return a - b; });
    var index = Math.round(merged.length / 2);
    if (merged.length % 2 == 0) {
        return (merged[index] + merged[index - 1]) / 2;
    }
    else {
        return merged[index - 1];
    }
};
exports.findMedianSortedArrays = findMedianSortedArrays;
// ----- 41. First Missing Positive -----
var firstMissingPositive = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    var index = 1;
    nums.forEach(function (elem) { return elem === index ? index++ : null; });
    return index;
};
exports.firstMissingPositive = firstMissingPositive;
// ----- 20. Valid Parentheses -----
var isValid = function (s) {
    var parent = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (parent[s[i]]) {
            if (!stack || stack[stack.length - 1] !== parent[s[i]])
                return false;
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
};
exports.isValid = isValid;
