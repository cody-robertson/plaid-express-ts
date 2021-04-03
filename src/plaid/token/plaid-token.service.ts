import { PlaidClient } from '../plaid-client'
import { LinkTokenContainer } from "./link-token.interface";
import Debug from "debug";
import { AccessTokenContainer} from "./access-token.interface";

const debug = Debug('plaid:token-service')

export const getLinkToken = async (user_uuid: string) : Promise<LinkTokenContainer> => {
    const response = await PlaidClient.createLinkToken({
        user: {
            client_user_id: user_uuid
        },
        client_name: 'Plaid Test App',
        products: ['auth', 'transactions'],
        country_codes: ['US'],
        language: 'en'
    });
    debug(`Received link_token for user ${user_uuid} via request id ${response.request_id}`)
    return {
        link_token: response.link_token,
        user_uuid: user_uuid
    };
}

export const exchangePublicToken = async (public_token: string) : Promise<AccessTokenContainer> => {
    const response = await PlaidClient.exchangePublicToken(public_token);
    debug(`Received access_token for item id ${response.item_id} via request id ${response.request_id}`)
    return {
        public_token: response.access_token,
        item_id: response.item_id
    }
}
