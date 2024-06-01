function getNeighbors(row, col, matrix) {
  
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
  // Your code here 
  // const getDirectNeighbors = (row, col, matrix) => {
    let up = [row - 1, col];
    let upRight = [row -1,col +1];
    let upLeft = [row-1, col -1];
    let bottom = [row + 1, col];
    let bottomRight = [row+1, col+1];
    let bottomLeft = [row+1, col-1];
    let left = [row, col -1];
    let right = [row, col +1];
    let check = [up, upRight, upLeft, bottom, bottomRight, bottomLeft, left, right];
    let res = [];

    for (let i = 0; i < check.length; i++) {
      let el = check[i];
      if (el[0] >= 0 && el[1] >= 0 && el[0] <= matrix.length-1 && el[1] <= matrix[0].length-1 && matrix[el[0]][el[1]] > 0) {
        res.push(el);
      }
    }
    return res;
  // }

  // let startNode = [row, col];
  // let queue = [startNode];
  // let visited = new Set();
  // let res = [];

  // while (queue.length) {
  //   let currentNode = queue.shift();
  //   let neighbors = getDirectNeighbors(currentNode[0], currentNode[1], matrix);

  //   if (!visited.has(currentNode.toString())) {
  //     visited.add(currentNode.toString())
  //   }

  //   for (let neighbor of neighbors) {
  //     if (!visited.has(neighbor.toString())) {
  //       visited.add(neighbor.toString());
  //       queue.push(neighbor);
  //       res.push(neighbor);
  //     }
  //   }
  // }
  // return res;
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here 
  let visited = new Set();
  let count = 0;



  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let currentVal = matrix[i][j];
      let row = i;
      let col = j;
      let currentNode = [row, col]
      
      if (currentVal === 1 && !visited.has(currentNode.toString())) {
        count++;
        // traverse through the island;
        let size = 0;
        let queue = [[row, col]];
        

        while (queue.length) {
          let current = queue.shift();

          if (!visited.has(current.toString())) visited.add(current.toString());

          let neighbors = getNeighbors(current[0], current[1], matrix);

          for (let neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
              visited.add(neighbor.toString());
              queue.push(neighbor);
            }
          }
        }
        

      }
    }
  }

  return count;

}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

const matrix2 = [
                    [1,1,1,0,1],
                    [0,0,0,0,1],
                    [1,0,0,1,0],
                ]

console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

// matrix1 = [
//   [1,1,1,1,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// matrix2 = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// matrix3 = [
//   [0,0,1,0,0,1,1],
//   [1,1,0,0,1,0,1],
//   [0,0,0,1,0,0,1],
//   [1,0,1,0,0,1,1],
// ]


matrix4 = [
//            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
/* 0 */     [ 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0], // 0
/* 1 */     [ 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 1
/* 2 */     [ 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 2
/* 3 */     [ 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
/* 4 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 4
/* 5 */     [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 5
/* 6 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], // 6
/* 7 */     [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], // 7
/* 8 */     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
/* 9 */     [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
/* 10 */    [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 10
/* 11 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 11
/* 12 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 12
/* 13 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 13
/* 14 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 14
/* 15 */    [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
/* 16 */    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], // 16
/* 17 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 17
/* 18 */    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 18
/* 19 */    [ 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 19
//            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
]

// console.log(getNeighbors(1, 1, matrix1))//.to.have.deep.members([[0, 0], [0, 1], [0, 2], [1,2], [2,1], [2,2]])
// console.log(getNeighbors(0, 0, matrix2))//.to.have.deep.members([[0, 1], [1, 1]]);
// console.log(getNeighbors(19, 19, matrix4))//.to.have.deep.members([[18, 18]]);
// console.log(getNeighbors(3, 4, matrix3))//.to.have.deep.members([[3, 5], [2, 3]]);
// console.log(getNeighbors(13, 14, matrix4))//.to.have.deep.members([[12, 13], [12, 14], [12, 15], [13, 13], [13, 15], [14, 13], [14, 14], [14, 15]]);