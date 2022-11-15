// https://www.youtube.com/watch?v=NwyUsp7uGOk

root = [1,2,3,4,5,6];

var countNodes = function(root) {
    let height = 0;
    let p = root;
    while (p) {
        height += 1;
        p = p.left;
    };
    
    const maxCountAtLastLayer = 2 ** (height - 1);
    
    let start = 0;
    let end = maxCountAtLastLayer - 1;
    
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (isExit(middle)) {
            start = middle + 1;
        } else {
            end -= 1;
        };
    };
    
    function isExit(index) {
        const path = [];
        while (path.length < height - 1) {
            if (index % 2 === 1) {
                path.push('right');
                index = (index - 1) / 2;
            } else {
                path.push('left');
                index = index /2;
            };
        };
        
        let start = root;
        let branch
        while (branch = path.pop()) {
            start = start[branch];
            
            if (start === null) {
                return false;
            };
        };
        
        return true;
    };

    return maxCountAtLastLayer + end;
};

console.log(countNodes(root));