// 223. Rectangle Area

// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

let ax1 = -3;
let ay1 = 0;
let ax2 = 3;
let ay2 = 4;

let bx1 = 0;
let by1 = -1;
let bx2 = 9;
let by2 = 2;

ax1 = -2
ay1 = -2
ax2 = 2
ay2 = 2
bx1 = -2
by1 = -2
bx2 = 2
by2 = 2



var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);

    const leftOverlap = Math.max(ax1, bx1);
    const rightOverlap = Math.min(ax2, bx2);
    const xOverlap = rightOverlap - leftOverlap;

    const topOverlap = Math.min(ay2, by2);
    const bottomOverlap = Math.max(ay1, by1);
    const yOverlap = topOverlap - bottomOverlap;

    let areaOfOverlap = 0;
    if (xOverlap > 0 && yOverlap > 0) {
        areaOfOverlap = xOverlap * yOverlap;
    }

    const totalArea = areaA + areaB - areaOfOverlap;

    return totalArea;
};

console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2));