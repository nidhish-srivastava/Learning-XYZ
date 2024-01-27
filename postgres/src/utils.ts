import { Client } from 'pg';

export async function getClient() {
    // const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
    const client = new Client("postgres://nysklcgg:PPOaKLx3j39LkYXfFGFxYajhlSGhYjUx@balarama.db.elephantsql.com/nysklcgg");
    await client.connect();
    return client;
}