# Notion CMS

1. Clone & `npm install`
2. Install Netlify CLI: `npm install netlify-cli -g`, also install locally
3. Link account `netlify link`
4. Add environment variables in Netlify: `NOTION_DB` & `NOTION_KEY`
5. Start dev `netlify dev`
6. Review function in `toml` file: Netlify [Docs](https://docs.netlify.com/functions/build)
7. Confirm `json` is being fetched: `http://localhost:8888/.netlify/functions/fetchNotion`