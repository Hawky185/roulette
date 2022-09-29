import {getBetOdds} from "../../src/odds/odds";
import {colourBet, greenBet, numberBet, oddEvenBet} from "./helper/data";

describe('getBetOdds()', () => {
    it('returns correct odds for a number bet', () => {
        const betOdds = getBetOdds(numberBet);
        expect(betOdds).toEqual("35/1");
    });

    it('returns correct odds for an oddEven bet', () => {
        const betOdds = getBetOdds(oddEvenBet);
        expect(betOdds).toEqual("1/1");
    });

    it('correct odds for a black/red bet', () => {
        const betOdds = getBetOdds(colourBet);
        expect(betOdds).toEqual("1/1");
    });

    it('correct odds for a green bet', () => {
        const betOdds = getBetOdds(greenBet);
        expect(betOdds).toEqual("17/1");
    });
});

