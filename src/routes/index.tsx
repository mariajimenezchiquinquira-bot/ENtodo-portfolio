import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  LiveLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import weworkDashboardOverview from "@/assets/projects/wework-dashboard-overview.png";
import payraSplitJiraBoard from "@/assets/projects/payrasplit-jira-board.png";
import payraSplitNotionCover from "@/assets/projects/payrasplit-notion-cover.png";
import payraSplitNotionTimelineBacklog from "@/assets/projects/payrasplit-notion-timeline-backlog.png";
import payraSplitTableau from "@/assets/projects/payrasplit-tableau-dashboard.png";
import zipptoLanding from "@/assets/projects/zippto-landing.png";
import zipptoCollections from "@/assets/projects/zippto-collections.png";
import zipptoFront from "@/assets/projects/zippto-flashcard-front.png";
import zipptoBack from "@/assets/projects/zippto-flashcard-back.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";
import segElbowMethod from "@/assets/projects/segmentation-5-elbow-method.png";
import segDominantCategory from "@/assets/projects/segmentation-4-dominant-category.png";
import segAvgTransaction from "@/assets/projects/segmentation-6-avg-transaction-by-cluster.png";
import segCardFranchise from "@/assets/projects/segmentation-card-franchise.png";
import segDomesticIntl from "@/assets/projects/segmentation-2-domestic-vs-international.png";
import segWeekdayHeatmap from "@/assets/projects/segmentation-weekday-heatmap.png";
import n8nFlow from "@/assets/projects/n8n-flow-diagram.png";
import n8nConfirmationMsg from "@/assets/projects/n8n-confirmation-message.png";
import sheetsResult from "@/assets/projects/n8n-sheets.png";
import paFormulario from "@/assets/projects/formulario.png";
import paFlow from "@/assets/projects/power-automate-flow.png";
import paRequestMail from "@/assets/projects/power-automate-email-detail.png";
import paRequestNotify from "@/assets/projects/power-automate-request-approved-notification.png";
import paApprovedMail from "@/assets/projects/power-automate-email-approved.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of María José Jiménez, Industrial Engineering student specialized in digital product, business intelligence and data analysis, with AI-powered projects for fintech.",
      },
      { property: "og:title", content: "María José Jiménez — Portfolio" },
      {
        property: "og:description",
        content:
          "Data-driven and AI-powered projects in product, business intelligence, analytics and automation, with a focus on fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Business Intelligence",
  "Data Visualization",
  "Data Analysis",
  "Business Analysis",
  "Financial Analysis",
  "Automation",
  "Generative AI",
  "Process Improvement",
  "Agile Methodologies (Scrum, Kanban)",
  "UI/UX Design",
  "Digital Product Development",
  "Tableau",
  "Power BI",
  "Python",
  "SQL",
  "Excel",
  "R",
  "Power Automate",
  "N8N",
  "Vercel",
  "Supabase",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Industrial Engineering Student
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Projects
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="WeWork — Business Case"
              tech={["Business Intelligence", "Business Strategy", "Financial Analysis"]}
              actions={
                <DocsLink href="/docs/WeWork_Case_Study_Analysis.html" label="View Full Analysis" />
              }
            >
              <CardBlock label="Problem">
                WeWork reached a USD 47 billion valuation in 2019, but ultimately filed for
                bankruptcy in 2023. The challenge was to use financial and operational data to
                understand what was behind this growth and identify signals of risks to the
                business's sustainability.
              </CardBlock>
              <CardBlock label="Analysis">
                I analyzed the evolution of revenue, losses, costs, liabilities, equity, and
                financial commitments, connecting these indicators to the company's business
                model and expansion strategy. The goal was not only to understand what was
                happening, but also which characteristics of the business model and which
                decisions were driving these results.
              </CardBlock>
              <CardBlock label="Insight">
                WeWork's growth was accompanied by significant losses, increasing financial
                obligations, and long-term commitments, revealing a gap between the company's
                growth and its ability to sustain that growth financially. The analysis showed
                how financial data can reveal strategic and business sustainability risks.
              </CardBlock>
              <a
                href={weworkDashboardOverview}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center overflow-hidden rounded-md"
              >
                <img
                  src={weworkDashboardOverview}
                  alt="WeWork key metrics dashboard: valuation, liabilities vs. equity, revenue vs. net loss, and operating growth"
                  loading="lazy"
                  className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            </ProjectCard>

            <ProjectCard
              title="Payra Split — Shared Payments Feature"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/SplitlySplit-DashboardBI/Dashboard1?publish=yes" />
              }
            >
              <CardBlock label="Problem">
                Splitting shared expenses can be a hassle. When one person pays for everyone, they
                have to calculate how much each person owes and then tell each friend how much to
                send, often using a calculator, WhatsApp, or another app.
              </CardBlock>
              <CardBlock label="Solution">
                I developed a simulated BI/product case study for "Payra Split," a concept feature that
                lets Payra users split expenses, request payments, and see who has paid. I planned
                the product lifecycle in Notion, managed sprints in Jira, and built a Tableau
                dashboard using simulated data to analyze adoption and completion rates.
              </CardBlock>
              <CardBlock label="Result">
                An end-to-end case connecting product planning, agile execution, and BI to measure a
                feature from concept to post-launch analysis.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Product Planning
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitNotionCover, alt: "Payra Split Notion roadmap overview" },
                      { src: payraSplitNotionTimelineBacklog, alt: "Payra Split Notion timeline and backlog board" },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Jira — Sprint Execution
                  </p>
                  <div className="mx-auto w-full max-w-2xl">
                    <ProjectImageGrid
                      images={[
                        { src: payraSplitJiraBoard, alt: "Payra Split Jira Scrum board" },
                      ]}
                      columns={1}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Tableau — Adoption Dashboard
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitTableau, alt: "Payra Split Tableau usage and adoption dashboard" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Personalized Flashcards"
              tech={["UI/UX Design", "Supabase", "Vercel", "Claude Code"]}
              actions={
                <>
                  <LiveLink href="https://zippto.vercel.app/landing.html" label="Try Zippto" />
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/Zippto" />
                </>
              }
            >
              <CardBlock label="Problem">
                Traditional flashcard tools can make studying more complicated than it needs to be,
                with complex configurations, unintuitive imports, and confusing review systems.
              </CardBlock>
              <CardBlock label="Solution">
                "Zippto", a web application designed to simplify flashcard creation and review.
                Users can create custom collections and study any topic through a three-deck spaced
                repetition system that prioritizes the cards that need the most practice.
              </CardBlock>
              <CardBlock label="Result">
                A simpler and more intuitive study experience, without complex configurations or
                confusing review systems.
              </CardBlock>
              <ProjectImageGrid
                images={[
                  { src: zipptoFront, alt: "Zippto dashboard view" },
                  { src: zipptoBack, alt: "Zippto flashcard flip view" },
                  { src: zipptoCollections, alt: "Zippto flashcard study view" },
                  { src: zipptoLanding, alt: "Zippto landing page" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Automation — Paid Tool Requests"
              tech={["Power Automate", "Process Automation"]}
              actions={
                <DocsLink href="/docs/premium-tool-request-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problem">
                Requesting paid tools from the company, such as Claude Pro or Canva Pro, meant
                sending several emails and messages to get approval, making the process slow and
                lacking clear traceability.
              </CardBlock>
              <CardBlock label="Solution">
                A Power Automate flow centralizes and automates the entire process. Instead of
                sending emails and messages, users submit their request through a Microsoft Form
                with the tool they need, the justification, the cost, and the license duration.
                From there, the flow sends the request to the responsible team for approval or
                rejection, notifies the requester, and logs every decision.
              </CardBlock>
              <CardBlock label="Result">
                A manual, scattered process became a structured, automated, and fully traceable
                workflow, reducing operational workload and ensuring every request was properly
                recorded and documented.
              </CardBlock>
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <a
                  href={paFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md sm:row-span-2"
                >
                  <img
                    src={paFlow}
                    alt="Power Automate flow running successfully"
                    loading="lazy"
                    className="h-full w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                {[
                  { src: paFormulario, alt: "Microsoft Forms paid tool request form" },
                  { src: paRequestMail, alt: "Approval email with the request details" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
                {[
                  { src: paApprovedMail, alt: "Approval confirmation email for the administrator" },
                  { src: paRequestNotify, alt: "Notification that the request was approved" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
            </ProjectCard>

            <ProjectCard
              title="Analysis — Customer Churn & Capital Loss"
              tech={["Power BI", "DAX", "Data Visualization"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problem">
                A bank was experiencing high customer churn without a clear understanding of its
                main drivers or the financial impact associated with it.
              </CardBlock>
              <CardBlock label="Approach">
                An exploratory analysis was conducted in Power BI to identify churn patterns,
                compare customer segments, and detect customers at higher risk of leaving.
              </CardBlock>
              <CardBlock label="Results">
                The analysis showed that capital loss was concentrated among customers with high
                account balances, creating a significant financial impact. Inactivity emerged as
                the main warning signal, particularly in Germany, which had the highest churn rate.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Power BI dashboard: Customer Churn and Capital Loss Analysis"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

            <ProjectCard
              title="Segmentation — Cardholders by Spending Behavior"
              tech={["Python", "SQL", "Scikit-learn", "K-means"]}
              actions={
                <ActionLink href="/ConsumoTarjetasCredito.html" variant="solid">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Notebook
                </ActionLink>
              }
            >
              <CardBlock label="Problem">
                A bank had spending data from more than 47,000 cardholders, but no clear way to
                group them based on how they used their cards, making it difficult to create
                targeted promotions.
              </CardBlock>
              <CardBlock label="Approach">
                K-means was used to segment customers based on their transactional behavior, with
                the Elbow Method used to determine the optimal number of segments. SQL queries
                were then used to analyze usage frequency, average spending, and top spending
                category for each group.
              </CardBlock>
              <CardBlock label="Result">
                Three segments were identified: low-spending occasional users (42.7%), high-value
                occasional users (33.1%), and frequent users (24.2%). Based on these profiles,
                actions were defined to encourage usage among low-spending customers, strengthen
                retention among high-value customers, and increase loyalty among frequent users.
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: segElbowMethod, alt: "Elbow method to select the number of clusters" },
                  { src: segDominantCategory, alt: "Dominant spending category by cluster" },
                  { src: segAvgTransaction, alt: "Average transaction amount by customer cluster" },
                  { src: segCardFranchise, alt: "Most used card franchise by cluster" },
                  { src: segDomesticIntl, alt: "Domestic vs. international spending by cluster" },
                  { src: segWeekdayHeatmap, alt: "Spending by day of week and cluster" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Automation — Vehicle Contracts"
              tech={["n8n", "Gemini (AI)", "Process Automation"]}
              actions={
                <DocsLink href="/docs/vehicle-contract-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problem">
                A dealership's billing team manually transcribed 8 data fields from PDF contracts
                into a spreadsheet. It was a repetitive, time-consuming process prone to human
                error.
              </CardBlock>
              <CardBlock label="Solution">
                Built an n8n workflow to automate the process end to end. It retrieves contracts
                from Google Drive, extracts their content, and uses Gemini AI to identify the 8
                required fields. The data is then automatically added to Google Sheets, and once
                all contracts have been processed, the workflow sends a completion notification
                via Gmail.
              </CardBlock>
              <CardBlock label="Result">
                Manual data entry was eliminated and batch processing was streamlined, reducing
                errors and making the billing process more reliable.
              </CardBlock>
              <div className="flex flex-col gap-3">
                <a
                  href={n8nFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md"
                >
                  <img
                    src={n8nFlow}
                    alt="n8n workflow automating vehicle contract processing"
                    loading="lazy"
                    className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={sheetsResult}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={sheetsResult}
                      alt="Extracted vehicle data logged in Google Sheets"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                  <a
                    href={n8nConfirmationMsg}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={n8nConfirmationMsg}
                      alt="Gmail confirmation message after successful processing"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
              </div>
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills & Tools
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
