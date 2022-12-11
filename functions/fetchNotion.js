const { Client } = require("@notionhq/client")

const { NOTION_KEY, NOTION_DB } = process.env;

// Initializing a client
const notion = new Client({
    auth: NOTION_KEY,
})

export async function handler(event, context) {
    const response = await notion.databases.query({
        database_id: NOTION_DB,
        // filter: {
        //     type: 'status',
        //     status: {
        //         equals: 'Live'
        //     }
        // }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    }
}