import express from "express";

const router = express.Router();

const routes = {
    alive: '/alive',
    getOdds: '/odds',
    postBets: '/player/bets'
};



router.get(routes.alive, (req, res) => {
    res.status(200).send({alive: true})}
);




export default router;
