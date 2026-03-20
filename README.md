# Pebbs.app

Pebbs.app is a simple, production-ready MVP homepage built with Next.js, TypeScript, and Tailwind CSS. It is designed for static-friendly deployment on Vercel and for low-maintenance updates through plain data files and a papers folder in the repository.

## What this project includes

- A polished homepage with featured links, selected projects, and latest research papers
- Dedicated pages for projects, services, apps/websites, and research papers
- Automatic research paper discovery from `public/papers`
- Filename parsing for readable paper titles and optional date inference
- Optional metadata overrides in `data/paper-metadata.ts`
- A clean layout with reusable header, footer, and card components

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-friendly filesystem-based content

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify the production build locally:

```bash
npm run build
npm run start
```

## Content editing

### Projects, services, and apps

Edit the data files:

- `data/projects.ts`
- `data/services.ts`
- `data/apps.ts`

Each file exports a plain array of entries.

### Research papers

1. Add PDF files to `public/papers`
2. Commit and push the change
3. Vercel will pick up the files during the next deployment build

You do not need to edit the research page by hand for each new paper.

Recommended filename format:

- `2026-03-19-agentic-systems-for-small-teams.pdf`
- `2026-02-14-evaluating-rag-pipelines.pdf`
- `foundation-model-interface-notes.pdf`

Rules:

- If a filename starts with `YYYY-MM-DD`, the date is shown and papers are sorted newest first
- If no date prefix is present, the paper is sorted alphabetically
- Titles are inferred from the filename automatically

### Optional paper metadata

If you want to override an inferred paper title or date, edit:

- `data/paper-metadata.ts`

Example shape:

```ts
export const paperMetadata = {
  "foundation-model-interface-notes.pdf": {
    title: "Foundation Model Interface Notes"
  }
};
```

## Deploy to Vercel

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Accept the default Next.js build settings
4. Deploy

Because the site reads PDFs from the repository itself, adding or changing papers is just a normal Git commit followed by a deployment.

## GitHub push workflow

If the repository is already initialized locally:

```bash
git checkout -b codex/pebbs-homepage
git add .
git commit -m "Build Pebbs.app MVP homepage"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin codex/pebbs-homepage
```

If your remote already exists, skip the `git remote add origin ...` step.

After that, either:

- Open a pull request and merge into your default branch, or
- Push directly to your deployment branch if that is how your repo is set up

## Notes

- The papers folder is intentionally simple and does not require a database or CMS
- An empty `public/papers` folder is handled gracefully
- The filesystem-based paper listing works on Vercel during build/server rendering without client-side hacks
