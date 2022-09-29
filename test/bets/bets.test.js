import {calculateBetsReturn, validateBets} from "../../src/bets/bets";
import {allInvalidBets, allValidBets, allValidBetsReturn, someInvalidBets, winningValue} from "./helper/data";

describe('validateBets()', () => {
    it('returns true when all bets are valid', () => {
        const isValid = validateBets(allValidBets);
        expect(isValid).toEqual(true);
    });

    it('returns false when all bets are invalid', () => {
        const isValid = validateBets(allInvalidBets);
        expect(isValid).toEqual(false);
    });

    it('returns false when some bets are invalid and some are valid', () => {
        const isValid = validateBets(someInvalidBets);
        expect(isValid).toEqual(false);
    });
});

describe('calculateBetsReturn()', () => {
    it('returns correct values when some bets are winners and some are not', () => {
        const betsReturn = calculateBetsReturn(winningValue, allValidBets);
        expect(betsReturn).toEqual(allValidBetsReturn);
    });
});
