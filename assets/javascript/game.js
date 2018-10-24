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
    // Generate random number between 1 and 12
        // store and assign to pink crystal
    // Generate random number between 1 and 12
        // store and assign to green crystal
    // Generate random number between 1 and 12
        // store and assign to yellow crystal
        
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