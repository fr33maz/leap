let leapYears = []
for(let i = 1900; i <= 2100; i++) {
    if(isLeap(i)) leapYears.push(i)
}
console.log(leapYears)
function isLeap(year) {
    if(year % 4 == 0) {
        if(year % 100 === 0) {
            if(year % 400 !== 0) {
                return false;
            }
          return true
        }
      return true
    } 
}