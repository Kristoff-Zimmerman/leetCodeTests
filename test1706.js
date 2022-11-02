// Output: [1,-1,-1,-1,-1]
        
let grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]];
grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]

var findBall = function(grid) {

  let findBallPath = function(row, column, grid) {
    if (row === grid.length) {
        return column;
    };

    if (grid[row][column] === 1) {
      let nextColumn = column + 1;
      if (column !== grid[0].length - 1 && grid[row][column] === grid[row][nextColumn]) {
        return findBallPath(row + 1, nextColumn, grid);
      } else {
        return -1;
      };
    };
    if (grid[row][column] === -1) {
      let nextColumn = column - 1;
      if (column !== 0 && grid[row][column] === grid[row][nextColumn]) {
        return findBallPath(row +1, nextColumn, grid);
      } else {
        return -1;
      };
    };
  };
  
  let answer = []
  let currentRow = 0
  
  for (let i = 0; i < grid[0].length; i++) {
    answer.push(findBallPath(0, currentRow, grid))
    currentRow++
  };
  
  return answer
  
};



console.log(findBall(grid));


