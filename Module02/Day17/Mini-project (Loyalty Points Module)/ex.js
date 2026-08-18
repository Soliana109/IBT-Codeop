// ==========================================
// TELEBIRR LOYALTY POINTS MODULE
// ==========================================

function createLoyaltyPoints(earnRule) {

    // Private balance
    let points = 0;

    // Earn points
    function earn(amount) {
        const earnedPoints = earnRule(amount);
        points += earnedPoints;
    }

    // Redeem points
    function redeem(amount) {
        if (amount <= points) {
            points -= amount;
            return true;
        }

        return false;
    }

    // Getter
    function balance() {
        return points;
    }

    // Only these functions are exposed
    return {
        earn,
        redeem,
        balance
    };
}


// ==========================================
// PURE EARN RULES
// ==========================================

// Normal rule:
// 1 point for every 10 ETB
const normalRule = amount => Math.floor(amount / 10);

// Holiday rule:
// Double points
const holidayRule = amount => Math.floor(amount / 10) * 2;


// ==========================================
// CREATE LOYALTY MODULE
// ==========================================

const loyalty = createLoyaltyPoints(normalRule);


// ==========================================
// USING THE MODULE
// ==========================================

loyalty.earn(100);     // Earn 10 points
console.log(loyalty.balance()); // 10

loyalty.earn(250);     // Earn 25 points
console.log(loyalty.balance()); // 35

loyalty.redeem(15);
console.log(loyalty.balance()); // 20


// Trying to redeem more than the balance
const success = loyalty.redeem(50);

console.log(success);           // false
console.log(loyalty.balance()); // 20


// ==========================================
// HOLIDAY RULE
// ==========================================

// Create another module using the holiday rule
const holidayLoyalty = createLoyaltyPoints(holidayRule);

holidayLoyalty.earn(100);

console.log(holidayLoyalty.balance()); // 20