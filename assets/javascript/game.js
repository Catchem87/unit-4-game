$(document).ready(function() {
    // Your code goes here

    // On window load -->

    // Generate random number between 19 and 120
        // store and display
    var randomNum = Math.floor(Math.random() * 120) + 19
    console.log(randomNum)
    $("#randNum").html(randomNum)
    // Generate random number between 1 and 12
        // store and assign to blue crystal
    var blueNum = Math.floor(Math.random() * 12) + 1
    console.log(blueNum)
    $("")
    // Generate random number between 1 and 12
        // store and assign to pink crystal
    var pinkNum = Math.floor(Math.random() * 12) + 1
    console.log(pinkNum)
    // Generate random number between 1 and 12
        // store and assign to green crystal
    var greenNum = Math.floor(Math.random() * 12) + 1
    console.log(greenNum)
    // Generate random number between 1 and 12
        // store and assign to yellow crystal
    var yellowNum = Math.floor(Math.random() * 12) + 1
    console.log(yellowNum)
        
    // User clicks on a crystal
        // add value to player's total score
    
    // Player wins
        // player's total score === random number
        // wins increase by 1
        // game resets (not wins/losses)
    // Player loses
        // player's total score exceeds random number
        // losses increase by 1
        // game resets (not wins/losses)
    });