// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
function avg(x) {
    let avgn = 0
    for (let i = 0; i < x.length; i++) {
      avgn += x[i]
    }
    avgn = avgn / x.length
    console.log(avgn)
    return avgn
  }
  
  
  var johnsTeam = [101, 100, 100]
  var mikesTeam = [100, 100, 100]
  
  var johnsAvg = avg(johnsTeam)
  var mikesAvg = avg(mikesTeam)
  
  var stat = johnsAvg != mikesAvg ? johnsAvg > mikesAvg ? "John's Team" : "Mike's Team" : "Draw"
  console.log(stat)
  
  