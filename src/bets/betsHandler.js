import {spin} from "../table/table";
import {calculateBetsReturn, validateBets} from "./bets";



const betsHandler = async (req, res) => {
    const bets = req.body;
    if (!validateBets(bets)) {
        return res.status(400).send({message: "invalid bets"})
    }
    const winningNumber = spin();
    const betsReturn = calculateBetsReturn(winningNumber, bets);

    return res.status(200).send(betsReturn)
};

export default betsHandler;
