// let matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
// matrix = [[1,2],[2,2]]

let matrix = [[36,86,7,94,71,59,10],[19,0,86,7,94,71,59]]
 
 var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i+1][j+1] > -1) {
                if (matrix[i][j] !== matrix[i+1][j+1]) {return false};    
            };
        };
    };
    return true;  
 };




console.log(isToeplitzMatrix(matrix));




