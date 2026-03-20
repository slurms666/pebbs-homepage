# Pebbs.app

Pebbs.app is a production-ready business website built with Next.js, TypeScript, and Tailwind CSS. It is designed for static-friendly deployment on Vercel and for low-maintenance updates through plain data files and a papers folder in the repository.

## What this project includes

- A business-focused homepage for Pebbs.app
- Dedicated pages for services, projects, research, and contact
- Automatic research paper discovery from `public/papers`
- Filename parsing for readable paper titles and optional date inference
- Optional metadata overrides in `data/paper-metadata.ts`
- Simple content files for site details, services, projects, and paper metadata

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

### Business content

Edit the data files:

- `data/site.ts`
- `data/projects.ts`
- `data/services.ts`

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

## Notes

- The papers folder is intentionally simple and does not require a database or CMS
- An empty `public/papers` folder is handled gracefully
- The filesystem-based paper listing works on Vercel during build/server rendering without client-side hacks
