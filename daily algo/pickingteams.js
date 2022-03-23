// Picking Teams
// Programming challenge description:
// A group of children are picking teams for a game of soccer. The way they pick teams is to line up all the players and select one person at a time from that line. Starting from the first player in line, the person to be selected will always be "X" people down the line from the last player picked. When the end of the line is reached, counting resumes from the start of the line. Write a program that will return a list of players in the order they get selected to play.

// Input:
// Your program should read a single line from standard input. That line will contain two comma-separated positive integers X and Z, where X is how many people to count when selecting the next player and Z is the number of people in line.

// Output:
// Print out the index of all the players (0 to Z-1, space delimited) in the order they will be selected.

// Example: X = 3 Z = 8 Result = [0, 3, 6, 2, 7, 5, 1, 4]

// Test 1
// Test Input
// Download Test 1 Input
// 10,3
// Expected Output
// Download Test 1 Input
// 2 5 8 1 6 0 7 4 9 3
// Test 2
// Test Input
// Download Test 2 Input
// 5,2
// Expected Output
// Download Test 2 Input
// 1 3 0 4 2

// X is how many people to count when selecting the next player 
// Z is the number of people in line.

function pickingTeams(x,z) {
    const players = []
    for (let i=0; i < z.length; i+=x) {
      players[players.length] = z.push(i, i + x)
    }
      return players
  }

  function pickingTeams(arr) {
    let length = arr.length;
    for (let i =0; i < length; i++) {
      for (let j =0; j < length; j++) {
          if (arr[j] > arr[j+1]) {
            let holder = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = holder
          }
        }
    }
  }