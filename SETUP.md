# GitHub setup

The GitHub token in this environment cannot create new repositories automatically. Follow these steps once to publish `moin-bin-umair-rebuild`:

## 1. Create the repo on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`moin-bin-umair-rebuild`**
3. Visibility: Public (or Private)
4. Do **not** initialize with README (this project already has one)
5. Click **Create repository**

## 2. Push from your machine

The project lives at:

```bash
/home/ubuntu/moin-bin-umair-rebuild
```

If you're on another machine, clone after pushing:

```bash
cd /home/ubuntu/moin-bin-umair-rebuild
git remote add origin git@github.com:m-wasii/moin-bin-umair-rebuild.git
git branch -M main
git push -u origin main
```

## 3. Connect Cloudflare Pages

See [README.md](./README.md#deploy-to-cloudflare-pages) for Cloudflare dashboard steps.

Build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node: `20`

---

After the repo exists on GitHub, future pushes to `main` will trigger Cloudflare deploys automatically.
