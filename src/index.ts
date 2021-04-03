import express from 'express';
import helmet from "helmet";
import dotenv from 'dotenv';
import Debug from 'debug';
import {plaidRouter} from "./plaid/plaid.router";

dotenv.config();

const debug = Debug('index');

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(express.json());
app.use('api/plaid', plaidRouter);

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`);
});
