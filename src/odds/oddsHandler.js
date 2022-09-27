import { allOdds } from "./odds";

const oddsHandler = async (req, res) => {
    allOdds ?
        res.status(200).send({odds: allOdds}) :
        res.status(404).send({odds: "No odds found"});
};

export default oddsHandler;
