# Next.js Konsuld Widget

A Next.js 14 application with App Router configured for GitHub Pages deployment.

## Routes

- `/dev` - Development environment
- `/staging` - Staging environment  
- `/prod` - Production environment

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

This will create an `out` folder with static files ready for deployment.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The static files will be generated in the `out` folder
3. Deploy the contents of the `out` folder to your GitHub Pages repository

### Configuration

The project is configured with:
- `output: 'export'` for static generation
- `trailingSlash: true` for GitHub Pages compatibility
- `images: { unoptimized: true }` for static export
- Base path configuration for GitHub Pages subdirectory deployment

## Project Structure

```
├── app/
│   ├── dev/page.tsx
│   ├── staging/page.tsx
│   ├── prod/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── PageContent.tsx
├── .github/workflows/
│   └── deploy.yml
├── next.config.js
└── package.json
```
