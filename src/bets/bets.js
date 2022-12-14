import {tableColours, tableNumbers} from "../table/table";
import {getBetOdds} from "../odds/odds";

export const validateBets = (bets) => {
    let isValid = true;
    bets.forEach((bet) => {
        if (!bet.type) {
            isValid = false;
        }
        switch (bet.type) {
            case "number":
                if (tableNumbers.includes(bet.value)) {
                    break;
                } else {
                    isValid = false;
                }
            case "colour":
                if (tableColours.includes(bet.value)) {
                    break;
                } else {
                    isValid = false;
                }
            case "oddEven":
                if ((bet.value === ("odd" || "even"))) {
                    break;
                } else {
                    isValid = false;
                }
            default:
                isValid = false;
        }
    });
    return isValid;
};

export const calculateBetsReturn = (winningValue, bets) => {
    const betsReturn = [{winningValue: winningValue}];
    bets.forEach((bet) => {
        const odds = getBetOdds(bet);
        const isWinner = calculateIsWinner(winningValue, bet);
        const winnings = calculateWinnings(odds, bet, isWinner);
        bet["odds"] = odds;
        bet["isWinner"] = isWinner;
        bet["winnings"] = winnings;
        betsReturn.push(bet);
    });
    return betsReturn;
};

const calculateIsWinner = (winningValue, bet) => {
    switch (bet.type) {
        case "number":
            return isWinningNumber(winningValue.number, bet.value);
        case "colour":
            return isWinningColour(winningValue.colour, bet.value);
        case "oddEven":
            return isWinningOddEven(winningValue.number, bet.value);
        default:
            return false;
    }
};

const isWinningOddEven = (winningNumber, oddEven) => {
    if (winningNumber === ("0" || "00")) {
        return false;
    }

    return (isOddEven(winningNumber) === oddEven);
};

const isWinningColour = (winningColour, betColour) => {
    return (winningColour === betColour);
};

const isWinningNumber = (winningNumber, betNumber) => {
    return (winningNumber === betNumber);
};

const calculateWinnings = (odds, bet, isWinner) => {
    if(isWinner) {
        const stake = bet.stake || 0;
        const decimal = eval(odds);
        return (decimal * stake) + stake;
    }
    return 0;
};

const isOddEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    }
    return "odd"
};
