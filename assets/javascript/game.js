$(document).ready(function () {
   
    var randomNum = Math.floor(Math.random() * 120) + 19
    console.log(randomNum)
    $("#randNum").html(randomNum)
   
    var blueNum = Math.floor(Math.random() * 12) + 1
    console.log(blueNum)
    var pinkNum = Math.floor(Math.random() * 12) + 1
    console.log(pinkNum)
    var greenNum = Math.floor(Math.random() * 12) + 1
    console.log(greenNum)
    var yellowNum = Math.floor(Math.random() * 12) + 1
    console.log(yellowNum)

    var playerScore = 0;
    var losses = 0;
    var wins = 0;

    $("#score").html(playerScore)
    $("#wins").html(wins)
    $("#losses").html(losses)


    $(".blueCrystal").on("click", function () {
        playerScore += parseInt(blueNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            console.log("WINNER")
            $("#wins").html(++wins)
        }
        if (playerScore > randomNum) {
            console.log("LOSER")
            $("#losses").html(++losses)
        }
    })

    $(".pinkCrystal").on("click", function () {
        playerScore += parseInt(pinkNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            alert("Game Won")
            $("#wins").html(++wins)
        }
        if (playerScore > randomNum) {
            alert("Game Lost")
            $("#losses").html(++losses)
        }
    })

    $(".greenCrystal").on("click", function () {
        playerScore += parseInt(greenNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            alert("Game Won")
            $("#wins").html(++wins)
        }
        if (playerScore > randomNum) {
            alert("Game Lost")
            $("#losses").html(++losses)
        }
    })

    $(".yellowCrystal").on("click", function () {
        playerScore += parseInt(yellowNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            alert("Game Won")
            $("#wins").html(++wins)
        }
        if (playerScore > randomNum) {
            alert("Game Lost")
            $("#losses").html(++losses)
        }
    })

})