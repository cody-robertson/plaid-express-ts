import express from "express";
import {plaidTokenRouter} from "./token/plaid-token.router";

export const plaidRouter = express.Router();

plaidRouter.use('/token', plaidTokenRouter);
