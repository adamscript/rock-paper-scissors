function computerPlay(){
    var cpu_selections = ["Rock", "Paper", "Scissors"];
    return cpu_selections[Math.floor(Math.random() * 2.9)]
}

console.log(computerPlay())