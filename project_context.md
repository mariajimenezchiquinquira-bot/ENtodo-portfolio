# Project Context — Consolidated English Portfolio (María José Jiménez)

This file summarizes the structure of this project and the changes made with Claude's help, for quick context in future sessions.

## General info

- Project: React + Vite, consolidated English portfolio with ALL of María José's English-language projects (Product, Business Intelligence, and Data Analysis), with no duplicates, so no project is left out of an English portfolio.
- Location: `C:\Users\alura\Documents\Claude\PortfolioHTML\ENtodo-portfolio`
- Repository: `github.com/mariajimenezchiquinquira-bot/ENtodo-portfolio`, branch `master`
- Not yet deployed to Vercel (pending — connect the GitHub repo to a new Vercel project once it's pushed).
- This project was created by copying the base of `portfolio-product` and adding the projects from `portfolio-bi` and `portfolio-data-analysis`, avoiding duplicates. Own code, not sharing `.git` with any of the other portfolios.
- All portfolio content lives in `src/routes/index.tsx`
- Project images live in `src/assets/projects/`
- Reusable button labels (GitHub, docs, dashboard) live in `src/components/portfolio/ProjectCard.tsx`

## Current projects (6)

1. **WeWork — Business Case** (Business Intelligence, Business Strategy, Financial Analysis) — from `portfolio-bi`
2. **Payra Split — Shared Payments Feature** (Notion, Jira, Tableau, Scrum) — from `portfolio-bi`
3. **Zippto — Personalized Flashcards** (UI/UX Design, Supabase, Vercel, Claude Code) — from `portfolio-product`
4. **Analysis — Customer Churn & Capital Loss** (Power BI, DAX, Data Visualization) — from `portfolio-data-analysis`
5. **Segmentation — Cardholders by Spending Behavior** (Python, SQL, Scikit-learn, K-means) — from `portfolio-data-analysis`
6. **Automation — Vehicle Contracts** (n8n, Gemini AI, Process Automation) — from `portfolio-data-analysis`

## Duplicate resolution

Two projects existed in more than one source portfolio. The version used here was picked automatically, following the same rule applied earlier to the Spanish consolidated portfolio (`EStodo-portfolio`):

- **Customer Churn & Capital Loss**: existed in `portfolio-bi`, `portfolio-data-analysis`, and `portfolio-product`. Used the `portfolio-data-analysis` version/copy (its main subject area).
- **Payra Split**: existed in `portfolio-bi` and `portfolio-product`. Used the `portfolio-bi` version/copy (matches how it was resolved in the Spanish consolidated portfolio).

The "Premium Tool Request Automation" project (kept in reserve, not shown, in `portfolio-product`) was NOT added to this portfolio either — same reserved status, assets kept in the code (`RESERVED_PREMIUM_TOOL_REQUEST_AUTOMATION_ASSETS`) so cleanup tools don't delete them.

## Deployment flow (pending setup)

This repo has not been connected to Vercel yet. Once connected (same flow as the other portfolios):

```
cd "C:\Users\alura\Documents\Claude\PortfolioHTML\ENtodo-portfolio"
git add -A
git commit -m "descriptive message"
git push
```

### Who does `git push`

Claude (from Cowork) can write files and do `git add` + `git commit` directly in this folder, but **has no GitHub credentials**, so it cannot `git push`. The usual flow is:

1. Claude makes changes, leaves them as a local `git add -A` + `git commit`.
2. **María José does `git push` manually**, opening Git Bash in this folder and running `git push`.
3. Once the push is done, Vercel (once connected) redeploys automatically.

### Known issue: stuck `.git/index.lock`

When Claude (from Cowork) writes files directly into this folder, a stuck `.git/index.lock` (or `HEAD.lock`) file can sometimes block the next `git add`/`git commit`. If the file can't be deleted due to permissions, Claude needs to request delete permission on the connected folder before retrying.

## Changes made so far

### Project creation
- Copied `portfolio-product` in full (code, components, config) without `.git` or `node_modules`, as the base.
- Added the projects from `portfolio-bi` (WeWork, Payra Split) and `portfolio-data-analysis` (Analysis — Customer Churn & Capital Loss, Segmentation, Automation — Vehicle Contracts), copying their images and PDFs into this project too.
- Avoided duplicating "Customer Churn & Capital Loss" (in all three source portfolios) and "Payra Split" (in two), per the rule above.
- Updated the title/meta SEO to reflect all three areas (Product, BI, Data Analysis), and combined the Skills & Tools list from the three source portfolios.
- Created the GitHub repository as `ENtodo-portfolio` and made the initial commit (`9977474`). Vercel deployment still pending.
