export interface CaseStudyMeta {
  label: string;
  value: string;
  href?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  year: string;
  summary: string;
  meta: CaseStudyMeta[];
  numbers: { value: string; label: string }[];
  problem: string;
  decisions: { title: string; body: string }[];
  limits: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "code-battle": {
    slug: "code-battle",
    title: "Code Battle",
    year: "2026",
    summary:
      "Two developers, the same problem set, one clock. The hard part isn't the editor — it's getting two browsers to agree on who won without trusting either of them.",
    meta: [
      {
        label: "Stack",
        value: "Next.js 16 · React 19 · TypeScript · Supabase · Monaco",
      },
      {
        label: "Live",
        value: "codebattle.tejaverse.org ↗",
        href: "https://codebattle.tejaverse.org",
      },
      {
        label: "Source",
        value: "sangisapusaiteja/CodeBattle ↗",
        href: "https://github.com/sangisapusaiteja/CodeBattle",
      },
    ],
    numbers: [
      { value: "8", label: "Tables" },
      { value: "8", label: "DB functions" },
      { value: "12", label: "Indexes" },
      { value: "68", label: "Source files" },
    ],
    problem:
      "Practising for coding interviews is normally a solo activity: one person, one problem, a compiler that never disagrees with you. What that never rehearses is the part the interview actually tests — writing correct code while someone else races you to the same problem. Code Battle makes that a mode rather than an accident: a host picks the problems, shares a six-character room code, and both players solve the same set on their own devices against one countdown.",
    decisions: [
      {
        title: "Rating arithmetic lives in SQL, not the application",
        body: "Elo and XP are computed inside finalize_match, a SECURITY DEFINER function, along with the per-match ledger rows. Putting that maths in the database costs testability — SQL is harder to unit test than application code — and in exchange the numbers a player is incentivised to inflate stop being an application concern. The settlement is also idempotent (it early-returns if the match is already finished) and takes a row lock on the match before writing, so two players finishing at the same moment cannot both settle it.",
      },
      {
        title: "Transitions are compare-and-set, not a whitelist",
        body: "A match moves waiting → matched → countdown → active → finished, and both clients follow it over Supabase Realtime rather than polling. transition_match only advances a match when the row is still in the status the caller expected, and allowed values are constrained by a CHECK on the column. Stamping starts_at at countdown time means both browsers read one shared deadline instead of each starting their own timer.",
      },
      {
        title: "Realtime, with polling underneath it",
        body: "Realtime alone was not enough: Supabase does not echo a client's own writes back to that client, which is exactly the case that matters when you are the host. The client subscribes to postgres_changes on the matches, players and submissions tables and also refetches on an interval, so a dropped or missed event degrades into a slow update rather than a frozen screen.",
      },
      {
        title: "One final submission per player, per problem",
        body: "A unique partial index — submissions_one_final_per_player on (match_id, player_id, problem_id) where is_final — makes double-scoring structurally impossible rather than something the code hopes won't happen. Every write path inserts with is_final true and no upsert, so a racing second insert is rejected by the database, and the action surfaces that error instead of silently retrying.",
      },
      {
        title: "Room codes that survive people typing them",
        body: "Codes are six characters drawn from an alphabet with the ambiguous glyphs removed — no I, O, 0 or 1 — because they get read aloud and retyped. The generator probes for an unused code before inserting, but the real guarantee is a unique constraint on the column; the probe just avoids a pointless failed insert.",
      },
    ],
    limits: [
      "Pass and fail counts are computed in the browser and stored as reported. The server trusts those numbers when it awards XP, so re-executing submissions server-side is the next step and the weakest link in the current design.",
      "User code runs through new Function inside the page context. That is isolation by convention, not a real boundary — a Worker or iframe would be the honest version of it.",
      "Timeouts only apply to solutions that return a promise, so a synchronous infinite loop will hang the tab rather than being cut off.",
      "The state machine has no automated tests, and it is the highest-risk logic in the app.",
    ],
  },

  "code-trace": {
    slug: "code-trace",
    title: "Code Trace",
    year: "2026",
    summary:
      "A DSA visualiser where every problem is animated line by line. The design bet is that the animation should never be able to disagree with the code it is showing.",
    meta: [
      {
        label: "Stack",
        value: "Next.js 16 · React 19 · TypeScript · Supabase · Tailwind",
      },
      {
        label: "Live",
        value: "codetrace.tejaverse.org ↗",
        href: "https://codetrace.tejaverse.org",
      },
      { label: "Source", value: "Private repository" },
    ],
    numbers: [
      { value: "119", label: "Problems" },
      { value: "13", label: "Categories" },
      { value: "238", label: "Approaches" },
      { value: "238", label: "Visualisers" },
    ],
    problem:
      "Reading an algorithm rarely tells you what it does. Watching a bar chart move does. The catch is that most visualisers are a second implementation living next to the real code, and the two quietly drift apart — the animation shows what the author meant, not what the code does. Code Trace takes the opposite position: the animation is generated from a simulation of the algorithm, and playback only ever walks that generated result.",
    decisions: [
      {
        title: "Playback walks a precomputed trace",
        body: "Each approach has a trace builder that simulates the algorithm over the given input and returns an ordered list of steps. That list is memoised per approach, and the player does nothing but move through it. Because the steps are produced once, up front, the animation cannot desynchronise from the code mid-playback — the failure mode that makes most teaching visualisers untrustworthy simply isn't reachable.",
      },
      {
        title: "One shared step contract",
        body: "Every visualiser renders from the same shape: the active source line, a highlighted set of cells, named variables with a tone (ok, fail, info), a result, and a plain-English explanation of what just happened. Fixing that contract early is why 238 visualisers could be built without each one inventing its own vocabulary.",
      },
      {
        title: "A registry instead of one generic renderer",
        body: "Visualisers are looked up by problem and approach — getVisualizer(slug, versionId) — from a registry of 238 entries. Kadane's algorithm wants a running-total bar chart; a linked-list cycle wants nodes and arrows. A single generic renderer would have flattened all of them into something that fits none, so the cost of per-approach components was paid deliberately.",
      },
      {
        title: "Two approaches per problem, with the source beside them",
        body: "Every problem ships two approaches so you can see the naive version and the better one animate side by side, each tagged with its own time and space complexity. The source for each approach is stored as a string alongside its trace builder, so the code pane and the animation always come from the same place.",
      },
    ],
    limits: [
      "traces.ts has grown to roughly 24,700 lines in a single module. It is by far the largest maintenance cost in the project and wants splitting per category.",
      "The code pane is a hand-rolled line renderer. Monaco is installed but unused, so there is no real syntax highlighting yet.",
      "There are no automated tests, and the trace builders are exactly the kind of pure functions that would be cheap to test.",
    ],
  },

  "interview-handbook": {
    slug: "interview-handbook",
    title: "Interview Handbook",
    year: "2025",
    summary:
      "513 topics, each with an explanation, an animation, a quiz and a runnable editor. The engineering problem is serving that much content without making every navigation a database round trip.",
    meta: [
      {
        label: "Stack",
        value: "Next.js 14 · React 18 · TypeScript · Supabase · Monaco",
      },
      {
        label: "Live",
        value: "interviewhandbook.tejaverse.org ↗",
        href: "https://interviewhandbook.tejaverse.org",
      },
      {
        label: "Source",
        value: "sangisapusaiteja/InterviewHandbook ↗",
        href: "https://github.com/sangisapusaiteja/InterviewHandbook",
      },
    ],
    numbers: [
      { value: "513", label: "Topics" },
      { value: "1,000", label: "Questions" },
      { value: "458", label: "Visualisations" },
      { value: "82", label: "Modules" },
    ],
    problem:
      "Revision material is only useful if getting to it is instant. This site holds 513 topics across nine categories, each one carrying a concept write-up, an interactive visualisation, a quiz and a code editor — and it is read by many people who all see the same content. A straightforward implementation re-fetches that content from Postgres on every navigation, which is a lot of identical queries for data that almost never changes.",
    decisions: [
      {
        title: "Cache the content that everyone shares, and only that",
        body: "Category, topic, module and search-index reads go through a cache with a five-minute TTL — a single-slot helper for one-shot reads and a keyed one for reads that take arguments. The split is deliberate: content is shared and cacheable, while progress and preferences are per-user and are never cached there.",
      },
      {
        title: "Build the search index once, on the server",
        body: "Search joins categories, topics and modules into a flat list with a precomputed search string, and the client holds that index in memory for the session. Search then costs nothing per keystroke, and the join only ever runs on the server — the alternative was shipping a join to the browser or querying per keystroke.",
      },
      {
        title: "One preferences fetch for the whole app",
        body: "Theme, pinned topics, recent items and assistant state load through a single provider after sign-in, keyed to the authenticated user, and a separate component writes theme changes back. Consolidating it means one request instead of four components each fetching their own slice, and it removes the class of bug where two parts of the UI disagree about the current theme.",
      },
      {
        title: "Run the database in the browser",
        body: "The PostgreSQL side of the handbook uses PGlite, instantiated in memory rather than against a directory, so a reader can run real SQL against a real engine without a server round trip. Python runs through Pyodide on the same principle; JavaScript is executed in a sanitised function scope with a stand-in console.",
      },
      {
        title: "The assistant is a server route, not a client key",
        body: "The AI assistant is a POST route that requires a session, applies a per-user rate limit, and calls the model server-side with a trimmed conversation history. Keeping the key off the client was the constraint that shaped it — the client only ever talks to my own route.",
      },
    ],
    limits: [
      "Per-category topic counts are hardcoded in the app config and have already drifted from the seed data — one category reads 80 in the config and 76 in the database.",
      "Activity streaks and the heatmap live on their own progress route, not the dashboard, which is the wrong home for the thing people check most often.",
    ],
  },

  tejaverse: {
    slug: "tejaverse",
    title: "tejaverse.org",
    year: "2026",
    summary:
      "The hub for the tools — a single page where the blog opens in place, the theme never flashes, and the whole thing is built out of Markdown files.",
    meta: [
      {
        label: "Stack",
        value: "Next.js 16 · React 19 · TypeScript · Tailwind · Markdown",
      },
      {
        label: "Live",
        value: "tejaverse.org ↗",
        href: "https://tejaverse.org",
      },
      {
        label: "Source",
        value: "sangisapusaiteja/tejaverse ↗",
        href: "https://github.com/sangisapusaiteja/tejaverse",
      },
    ],
    numbers: [
      { value: "24", label: "Posts" },
      { value: "7", label: "Components" },
      { value: "3", label: "Projects" },
      { value: "265", label: "Lines, largest file" },
    ],
    problem:
      "Three tools lived on three subdomains with nothing tying them together, and I wanted somewhere to write about building them without standing up a CMS. The constraints were the useful part: the writing should be plain files in the repository, reading a post should not cost a navigation, and the theme should be correct on the first paint rather than a frame later.",
    decisions: [
      {
        title: "Markdown files are the CMS",
        body: "Posts are read from the filesystem at request time and parsed for frontmatter, then sorted newest-first. There is no database and no admin surface — writing a post means adding a file, which is the whole editing experience. The trade is that editing is only accessible to someone with the repository, which for a personal site is the right side of that bargain.",
      },
      {
        title: "Posts open in place instead of navigating",
        body: "A post expands into an overlay on the same page, rendered from Markdown. That keeps the home page as the only route, and it needed the details done properly rather than a bare modal: focus is trapped while it is open, Escape closes it, and the body scroll is locked so the page behind doesn't move.",
      },
      {
        title: "The theme is set before the first paint",
        body: "A small blocking script runs in the document head, reads the stored preference (falling back to the system setting), and applies the class before anything renders. The alternative — deciding the theme in an effect after hydration — shows the wrong theme for one frame, which is exactly the frame people notice.",
      },
      {
        title: "Semantic tokens instead of colour literals",
        body: "Theme values are CSS variables — background, surface, edge, muted, accent — and the Tailwind config maps names onto them, so components refer to a role rather than a hex value. Changing the palette is a change in one place.",
      },
    ],
    limits: [
      "The hero's project and technology counts are hardcoded literals, so they drift silently whenever the config changes. The blog count is the only dynamic one.",
      "No sitemap, no robots file and no per-post metadata — search engines see one canonical page and have to infer the rest.",
    ],
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
