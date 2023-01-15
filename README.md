# Notion CMS

1. Clone & `npm install`
2. Download data and add to [Notion](https://drive.google.com/file/d/10RnLGxG_YIVPC6yP4YY5ZsP4YZPgjWYJ/view?usp=share_link). ##Remember to change layout to board
3. Install Netlify CLI: `npm install netlify-cli -g`, also install locally
4. Link account `netlify link`
5. Get API key from [Notion My Integrations Page](https://www.notion.so/my-integrations) 
6. [Get Database ID](https://developers.notion.com/docs/working-with-databases) from **Notion** page 
7. Add environment variables in Netlify: `NOTION_DB` & `NOTION_KEY`
8. Start dev `netlify dev`
9. Review function in `toml` file: Netlify [Docs](https://docs.netlify.com/functions/build)
10. Confirm `json` is being fetched: `http://localhost:8888/.netlify/functions/fetchNotion`
