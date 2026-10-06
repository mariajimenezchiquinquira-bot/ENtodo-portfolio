# Project Context — Consolidated English Portfolio (María José Jiménez)

This file summarizes the structure of this project and the changes made with Claude's help, for quick context in future sessions.

## General info

- Project: React + Vite, consolidated English portfolio with ALL of María José's English-language projects (Product, Business Intelligence, and Data Analysis), with no duplicates, so no project is left out of an English portfolio.
- Location: `C:\Users\Majo\Downloads\Claude\PortfolioHTML\ENtodo-portfolio`
- Repository: `github.com/mariajimenezchiquinquira-bot/ENtodo-portfolio`, branch `master`
- Live site (Vercel, project `e-ntodo-portfolio`): https://e-ntodo-portfolio.vercel.app/ — connected to the GitHub repo, redeploys automatically on every push to `master`.
- This project was created by copying the base of `portfolio-product` and adding the projects from `portfolio-bi` and `portfolio-data-analysis`, avoiding duplicates. Own code, not sharing `.git` with any of the other portfolios.
- All portfolio content lives in `src/routes/index.tsx`
- Project images live in `src/assets/projects/`
- Reusable button labels (GitHub, docs, dashboard) live in `src/components/portfolio/ProjectCard.tsx`

## Current projects (7)

1. **WeWork — Business Case** (Business Intelligence, Business Strategy, Financial Analysis) — from `portfolio-bi`
2. **Payra Split — Shared Payments Feature** (Notion, Jira, Tableau, Scrum) — from `portfolio-bi`
3. **Zippto — Personalized Flashcards** (UI/UX Design, Supabase, Vercel, Claude Code) — from `portfolio-product`
4. **Analysis — Customer Churn & Capital Loss** (Power BI, DAX, Data Visualization) — from `portfolio-data-analysis`
5. **Segmentation — Cardholders by Spending Behavior** (Python, SQL, Scikit-learn, K-means) — from `portfolio-data-analysis`
6. **Automation — Vehicle Contracts** (n8n, Gemini AI, Process Automation) — from `portfolio-data-analysis`
7. **Automation — Payment Tools Request** (Power Automate, Process Automation) — from `portfolio-product`, shown last (after Vehicle Contracts)

## Duplicate resolution

Two projects existed in more than one source portfolio. The version used here was picked automatically, following the same rule applied earlier to the Spanish consolidated portfolio (`EStodo-portfolio`):

- **Customer Churn & Capital Loss**: existed in `portfolio-bi`, `portfolio-data-analysis`, and `portfolio-product`. Used the `portfolio-data-analysis` version/copy (its main subject area).
- **Payra Split**: existed in `portfolio-bi` and `portfolio-product`. Used the `portfolio-bi` version/copy (matches how it was resolved in the Spanish consolidated portfolio).

The Power Automate project (internally `premium-tool-request-automation`, shown on the site as "Automation — Payment Tools Request") was added in October 2026 (see Changes). Its reserved-assets block (`RESERVED_PREMIUM_TOOL_REQUEST_AUTOMATION_ASSETS`) was removed from `index.tsx` because the images are now actually used.

## Deployment flow

Vercel is connected to the repo, so every push to `master` redeploys the site (1 to 2 minutes). From Git Bash in this folder:

```
cd "/c/Users/Majo/Downloads/Claude/PortfolioHTML/ENtodo-portfolio"
rm -f .git/index.lock
git add -A
git commit -m "descriptive message"
git push
```

### Who does `git push`

Claude (from Cowork) has no terminal on María José's computer and no GitHub credentials. It only writes/edits files in this folder; **María José runs `git add`, `git commit` and `git push` herself** in Git Bash (one step at a time, she prefers short step-by-step instructions). Once the push is done, Vercel redeploys automatically.

**Known quirk when Claude writes files here (`device_commit_files`)**: sometimes the write does not land (symptom: `git commit` says "nothing to commit"). Fix: re-stage the file to get its current `mtimeMs`, commit again passing that value as `expectedMtimeMs`, then re-stage and check the byte size changed before asking her to push.

### Known issue: stuck `.git/index.lock`

When Claude (from Cowork) writes files directly into this folder, a stuck `.git/index.lock` (or `HEAD.lock`) file can sometimes block the next `git add`/`git commit`. The fix is to run `rm -f .git/index.lock` in Git Bash before `git add` (included in the flow above).

## Changes made so far

### Project creation
- Copied `portfolio-product` in full (code, components, config) without `.git` or `node_modules`, as the base.
- Added the projects from `portfolio-bi` (WeWork, Payra Split) and `portfolio-data-analysis` (Analysis — Customer Churn & Capital Loss, Segmentation, Automation — Vehicle Contracts), copying their images and PDFs into this project too.
- Avoided duplicating "Customer Churn & Capital Loss" (in all three source portfolios) and "Payra Split" (in two), per the rule above.
- Updated the title/meta SEO to reflect all three areas (Product, BI, Data Analysis), and combined the Skills & Tools list from the three source portfolios.
- Created the GitHub repository as `ENtodo-portfolio` and made the initial commit (`9977474`). Vercel deployment still pending.

### October 2026 updates
- Added the project **Automation — Payment Tools Request** (Power Automate, Process Automation). Text translated to English from the Spanish version in `EStodo-portfolio`; images (`formulario.png`, `power-automate-flow.png`, `power-automate-email-detail.png`, `power-automate-email-approved.png`, `power-automate-request-approved-notification.png`) and PDF (`public/docs/premium-tool-request-automation-technical-documentation.pdf`) already existed in the project. Placed as the **last** card, after "Automation — Vehicle Contracts".
- Final card text (blocks Problem / Solution / Result): requesting paid corporate tools like Claude Pro and Canva Pro by email and messages was slow and untraceable; a Power Automate flow centralizes the request via Microsoft Forms (tool, justification, cost, license duration), routes it to the responsible department for approval or rejection, notifies the requester and logs every decision; result: a structured, automated, fully traceable workflow with less operational overhead.
- Connected the project to Vercel (`e-ntodo-portfolio`). First deployments failed with "Vulnerable TanStack Start package detected" (`@tanstack/react-start` 1.168.32 / `start-server-core` 1.169.17; patched versions are 1.168.60 / 1.169.39).
- Fixed by updating `@tanstack/react-router`, `@tanstack/react-start` and `@tanstack/router-plugin` to latest, then deleting `node_modules` and `package-lock.json` and running a clean `npm install` (updating only some packages left a stale `@tanstack/router-core` and the build failed with `MISSING_EXPORT` errors). Final install reported 0 vulnerabilities and `npm run build` passes. Always run `npm run build` locally before pushing.
- Removed the `RESERVED_PREMIUM_TOOL_REQUEST_AUTOMATION_ASSETS` reserve block from `index.tsx`.
