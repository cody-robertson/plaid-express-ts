import express, { Request, Response } from "express";
import { getLinkToken, exchangePublicToken } from "./plaid-token.service";

export const plaidTokenRouter = express.Router();

plaidTokenRouter.get('/link_token', async (req: Request, res: Response) => {
    try {
        const tokenResponse = await getLinkToken('REPLACEMEWITHUSERUUID');
        res.status(200).send(tokenResponse);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

plaidTokenRouter.post('/exchange', async (req: Request, res: Response) => {
    if (!req.body?.public_token) {
        res.status(400).send('Missing body parameter "public_token"')
    }
    else {
        try {
            const tokenResponse = await exchangePublicToken(req.body.public_token);
            res.status(201).send(tokenResponse);
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }
});
