import express from "express";

import oddsHandler from "../odds/oddsHandler";
import betsHandler from "../bets/betsHandler";
import tableHandler from "../table/tableHandler";

const router = express.Router();

const routes = {
    alive: "/alive",
    odds: "/odds",
    table: "/table",
    bets: "/player/bets"
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
 *               type: object
 *               properties:
 *                 number:
 *                   type: string
 *                   example: 35/1
 *                 colour:
 *                   type: object
 *                   properties:
 *                     red:
 *                       type: string
 *                       example: 1/1
 *                     black:
 *                       type: string
 *                       example: 1/1
 *                     green:
 *                       type: string
 *                       example: 17/1
 *                 oddEven:
 *                   type: string
 *                   example: 1/1
 *       404:
 *         description: The odds could not be found
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "No odds found"
 */
router.get(routes.odds, oddsHandler);

/**
 * @swagger
 * /table:
 *   get:
 *     summary: table
 *     description: returns a summary of the table and the different numbers and colours
 *     responses:
 *       200:
 *         description: The table has been successfully returned
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   number:
 *                     type: string
 *                     example: 19
 *                   colour:
 *                     type: string
 *                     example: red
 *       404:
 *         description: The table could not be found
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "No table values found"
 */
router.get(routes.table, tableHandler);

router.post(routes.bets, betsHandler);





export default router;
