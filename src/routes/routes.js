import express from "express";

import oddsHandler from "../odds/oddsHandler";

const router = express.Router();

const routes = {
    alive: '/alive',
    odds: '/odds',
    postBets: '/player/bets'
};



router.get(routes.alive, (req, res) => {
    res.status(200).send({alive: true})}
);


router.get(routes.odds, oddsHandler);





export default router;
