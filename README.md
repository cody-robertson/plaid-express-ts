# Plaid with Express and Typescript
An application demonstrating how to integrate an application with Plaid Link using Express and Typescript.  

## Configuration
To run, you will need to set environment variables for the following:
- PORT: what port for express to listen on
- DEBUG: what namespaces for DEBUG messages to log from
- PLAID_CLIENT_ID - your client id configured in Plaid
- PLAID_SECRET - your client secret configured in Plaid
- PLAID_ENVIRONMENT - which Plaid environment to target (sandbox, development, production)

## Running
To run, use `npm run dev`

## Notes
This is currently only the backend for integrating with Plaid link and currenlty only handles the token flow:
- Fetch a link_token from Plaid to initialize Plaid Link in a front-end application
- Echange a public_token from Plaid Link for a Plaid access_token
