let firtsNumber = "2002";
let secondNumber = "2002";

function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

if (PalindromeChecker(firtsNumber) && PalindromeChecker(secondNumber)) {
    console.log("The Given Two Numbers are palindrome");
}
else {
    console.log("The Given Numbers are Not palindrome");
}
