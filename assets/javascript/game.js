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

    var reset = function() {
        randomNum = Math.floor(Math.random() * 120) + 19
        console.log(randomNum)
        $("#randNum").html(randomNum)
       
        blueNum = Math.floor(Math.random() * 12) + 1
        console.log(blueNum)
        pinkNum = Math.floor(Math.random() * 12) + 1
        console.log(pinkNum)
        greenNum = Math.floor(Math.random() * 12) + 1
        console.log(greenNum)
        yellowNum = Math.floor(Math.random() * 12) + 1
        console.log(yellowNum)
    
        playerScore = 0;
        $("#score").html(playerScore)
        $("#result").html("")
    }

    $("#score").html(playerScore)
    $("#wins").html(wins)
    $("#losses").html(losses)


    $(".blueCrystal").on("click", function () {
        playerScore += parseInt(blueNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            $("#wins").html(++wins)
            $("#result").html("WINNER")
            setTimeout(reset, 2000)

        }
        if (playerScore > randomNum) {
            $("#losses").html(++losses)
            $("#result").html("LOSER")
            setTimeout(reset, 2000)
        }
    })

    $(".pinkCrystal").on("click", function () {
        playerScore += parseInt(pinkNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            $("#wins").html(++wins)
            $("#result").html("WINNER")
            setTimeout(reset, 2000)
        }
        if (playerScore > randomNum) {
            $("#losses").html(++losses)
            $("#result").html("LOSER")
            setTimeout(reset, 2000)
        }
    })

    $(".greenCrystal").on("click", function () {
        playerScore += parseInt(greenNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            $("#wins").html(++wins)
            $("#result").html("WINNER")
            setTimeout(reset, 2000)

        }
        if (playerScore > randomNum) {
            $("#losses").html(++losses)
            $("#result").html("LOSER")
            setTimeout(reset, 2000)
        }
    })

    $(".yellowCrystal").on("click", function () {
        playerScore += parseInt(yellowNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            $("#wins").html(++wins)
            $("#result").html("WINNER")
            setTimeout(reset, 2000)
        }
        if (playerScore > randomNum) {
            $("#losses").html(++losses)
            $("#result").html("LOSER")
            setTimeout(reset, 2000)
        }
    })

})