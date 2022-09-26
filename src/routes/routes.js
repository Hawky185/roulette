import express from "express";

import oddsHandler from "../odds/oddsHandler";

const router = express.Router();

const routes = {
    alive: '/alive',
    odds: '/odds',
    postBets: '/player/bets'
};

/**
 * @swagger
 * /alive:
 *   get:
 *     summary: alive
 *     description: respond 200 if application is running
 *     responses:
 *       200:
 *         description: application is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 alive:
 *                   type: boolean
 *                   example: true
 */
router.get(routes.alive, (req, res) => {
    res.status(200).send({alive: true})}
);

/**
 * @swagger
 * /odds:
 *   get:
 *     summary: odds
 *     description: returns a summary of the odds for the different types of bets
 *     responses:
 *       200:
 *         description: The odds have been successfully returned
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     example: number
 *                   odds:
 *                     type: string
 *                     example: 35/1
 */
router.get(routes.odds, oddsHandler);





export default router;
