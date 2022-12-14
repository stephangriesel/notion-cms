# Notion CMS

1. Clone & `npm install`
2. Add data to [Notion](https://drive.google.com/file/d/10RnLGxG_YIVPC6yP4YY5ZsP4YZPgjWYJ/view?usp=share_link)
3. Install Netlify CLI: `npm install netlify-cli -g`, also install locally
4. Link account `netlify link`
5. Add environment variables in Netlify: `NOTION_DB` & `NOTION_KEY`
6. Start dev `netlify dev`
7. Review function in `toml` file: Netlify [Docs](https://docs.netlify.com/functions/build)
8. Confirm `json` is being fetched: `http://localhost:8888/.netlify/functions/fetchNotion`