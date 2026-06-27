# VibeStream Website

Modern creator streaming dashboard built with plain HTML, CSS, and JavaScript.

## Local Run

1. Open this folder in VS Code.
2. Start a local server from this folder:

```bash
python -m http.server 5500
```

3. Open:

```text
http://localhost:5500/index.html
```

## Deploy Free (GitHub Pages)

1. Create a new GitHub repository.
2. Push this folder to that repository.
3. In GitHub repo settings, open Pages.
4. Source: Deploy from branch.
5. Branch: main, Folder: /(root).
6. Save and wait for build.

Your site URL will be:

```text
https://<your-github-username>.github.io/<repo-name>/
```

## Deploy Free (GitHub Web Upload - No Git, No CLI)

If Netlify Drop is blocked, you can still deploy from your browser:

1. Go to `https://github.com/new` and create a public repository.
2. Open the repository and click **uploading an existing file**.
3. Upload these files from this folder:
	- `index.html`
	- `style.css`
	- `script.js`
	- `CNAME`
	- `_redirects`
4. Commit the upload.
5. Go to **Settings -> Pages**.
6. Set Source to **Deploy from a branch**.
7. Select **main** branch and **/(root)** folder.
8. Save and wait for publish.

Your default URL will be:

```text
https://<your-github-username>.github.io/<repo-name>/
```

To use your domain:

1. In repository Pages settings, set custom domain to `www.vibestream.net`.
2. At your domain DNS provider add:
	- `CNAME` record: `www` -> `<your-github-username>.github.io`
	- Four `A` records for apex `@`:
	  - `185.199.108.153`
	  - `185.199.109.153`
	  - `185.199.110.153`
	  - `185.199.111.153`

For Netlify custom domain:

1. Open Site settings -> Domain management.
2. Add custom domain: `www.vibestream.net`.
3. Add apex redirect domain: `vibestream.net` and set redirect to `https://www.vibestream.net`.
4. Update DNS:
	- `CNAME` record: `www` -> `<your-netlify-subdomain>.netlify.app`
	- `A` record: `@` -> `75.2.60.5`
	- `A` record: `@` -> `99.83.190.102`

## Deploy Free (Netlify Drag and Drop)

1. Zip this folder.
2. Go to `https://app.netlify.com/drop`.
3. Drag the zip contents (or project folder) into the drop zone.

Netlify will return a public URL instantly.

## Notes

- Main entry file for hosting is `index.html`.
- All data is currently stored in browser localStorage.
- For cross-device accounts, uploads, and real backend persistence, add an API/database layer.
