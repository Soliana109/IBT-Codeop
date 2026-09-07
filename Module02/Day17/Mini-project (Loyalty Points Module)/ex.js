function createLoyaltyPoints(earnRule) {
    let points = 0;
    function earn(amount) {
        const earnedPoints = earnRule(amount);
        points += earnedPoints;
    }

    function redeem(amount) {
        if (amount <= points) {
            points -= amount;
            return true;
        }

        return false;
    }

    function balance() {
        return points;
    }

    return {
        earn,
        redeem,
        balance
    };
}

const normalRule = amount => Math.floor(amount / 10);
const holidayRule = amount => Math.floor(amount / 10) * 2;

const loyalty = createLoyaltyPoints(normalRule);

loyalty.earn(100);     
console.log(loyalty.balance()); 
loyalty.earn(250);     
console.log(loyalty.balance()); 

loyalty.redeem(15);
console.log(loyalty.balance()); 

const success = loyalty.redeem(50);

console.log(success);           
console.log(loyalty.balance()); 

const holidayLoyalty = createLoyaltyPoints(holidayRule);

holidayLoyalty.earn(100);

console.log(holidayLoyalty.balance()); 