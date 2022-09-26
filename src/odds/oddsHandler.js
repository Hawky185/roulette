import { allOdds } from "./odds";

const oddsHandler = async (req, res) => {
    res.status(200).send({odds: allOdds})
};

export default oddsHandler;
