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

    if (Math.round(Math.random()) == prompt("Press 1: To bet on red\nPress 2: To bet on black") - 1) { //true
        moneyPresent += amount;
        alert(`you win and now you have ${moneyPresent}$`)
    } else { //false
        moneyPresent -= amount;
        bet *= 2;
        if (moneyPresent) {
            alert(`you loose and now you have ${moneyPresent}$, your next bet is equal to ${bet}`)
        } else {
            alert(`you loose and now you have ${moneyPresent}$`)
        }
    }
}