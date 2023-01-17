const { Client } = require("@notionhq/client")

const { NOTION_KEY, NOTION_DB } = process.env;

// Initializing a client
const notion = new Client({
    auth: NOTION_KEY,
})

// This determines if card is live or not, be sure status name is same on Notion
export async function handler(event, context) {
    try {
    const response = await notion.databases.query({
        database_id: NOTION_DB,
        filter: {
            property: 'Status',
            status: {
                equals: 'Live'
            }
        }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    }
} catch(error){
    console.error(error);
    return {
        statusCode: 500,
        body: error.toString(),
    }
}
}