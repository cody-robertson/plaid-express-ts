import Plaid from "plaid";

export const PlaidClient = new Plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID || "",
    secret: process.env.PLAID_SECRET || "",
    env: Plaid.environments[process.env.PLAID_ENVIRONMENT || 'sandbox'],
    options: {}
});
