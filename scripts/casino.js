let moneyPresent = +prompt(`how much money do you currently have?`);
let bet = +prompt(`how much do you want to bet`);
while (moneyPresent > 0) {
    if (bet <= moneyPresent) {
        console.log("your bet is equal to: ", bet)
        play(bet)
    } else {
        console.log("your bet is equal to: ", moneyPresent)
        play(moneyPresent)
    }

}
function play(amount) {
    if (Math.round(Math.random())) {
        moneyPresent += amount;
        console.log(`you win and now you have ${moneyPresent}$`)
    } else {
        moneyPresent -= amount;
        console.log(`you loose and now you have ${moneyPresent}$`)
        bet *= 2;
    }
}