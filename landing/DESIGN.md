# Tracky landing: art direction

## Brief

- **Product:** Tracky, a training log for strength work, runs, programs and progress.
- **Place:** Telegram bot plus a Mini App. One account, one dataset.
- **Audience:** Russian-speaking gym-goers and runners who already train but keep the plan in notes, screenshots and memory.
- **Job of the page:** open the Telegram bot.
- **Tone:** technical, austere, athletic. A training logbook, not a SaaS dashboard.
- **Vibe in eight words:** black ink, set notation, graph paper, quiet confidence.
- **Anchor:** none. The brief calls for a black and white page. The only colour is the existing yellow plate inside the Tracky logo, used as a small brand seal.

## The one idea

The page behaves like a page from a strength-training journal. It is built from
hairlines, set notation, week strips and tables. The memorable element is the
**live-looking log sheet** in the hero: a week of training marks, a workout card
and the `3×8×60` scheme, made from the product's own vocabulary rather than a
generic dashboard.

The page never claims a user count, a testimonial or a result. The bot handle,
the exercise names, the program structure and the interface copy are real
product material. Product examples are labelled as samples.

## Geometry

Geometry is the page's second language, not a decorative layer:

- a large weight-plate circle behind the hero log sheet;
- thin crop marks at the four corners of the log sheet;
- numbered circles joined by a single rule in the three-step sequence;
- a map grid, a route polyline and start/finish nodes in the runs panel;
- square checkboxes in the goals list;
- soft 10 to 14px corners on cards, panels, media, menus and controls; 16px on
  screenshot windows; a 22px corner on the floating header;
- a six-square language row;
- a five-screen interactive stage with tabs, arrows, an orbit circle, a rail of
  square nodes and crop marks on every screen;
- a target circle behind the final Telegram action;
- one larger black-and-white pixel-square cluster of fourteen marks hugging the
  left edge of the hero headline, built as a single SVG mark so the motif does
  not become a counting device;
- a localized free badge with a check mark under the hero CTA, the first step and
  the final CTA.

Every shape uses the same hairline tokens as the tables. There are no gradients,
glows, blobs or decorative grids with nothing underneath them.

## Screenshots

The gallery uses real screenshots of the Mini App, not stock photos: the home
overview, the diary, the AI chat, the progress screen and an activity screen.
Each is captured in all six landing languages from a separate demo account per
language (`scripts/capture-screens.mjs`) with translated data, so no personal
data appears.

The screenshots are the product proof and the page's main section. They stay in
the app's own colour, with no grayscale filter. The stage shows one large screen
in a 16px window with thumbnail tabs, previous/next arrows and a lightbox; the
image switches together with the landing language. Keep them current when the
app's UI changes; replace a screen rather than decorating around an outdated one.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#000000` | Page ground |
| `--surface` | `#0b0b0b` | Quiet wells, log sheet |
| `--surface-raised` | `#121212` | Chat bubbles, raised rows |
| `--text` | `#ededed` | Body copy |
| `--text-strong` | `#ffffff` | Display heads, primary button fill |
| `--text-dim` | `#a3a3a3` | Secondary copy |
| `--text-mute` | `#8a8a8a` | Captions, axes, small metadata |
| `--line` | `#262626` | Hairlines inside a surface |
| `--line-strong` | `#3f3f3f` | Section rules, panel edges |
| `--inverse-bg` | `#ededed` | Light sections, final call to action, footer |
| `--inverse-text` | `#0a0a0a` | Ink on the inverse surface |
| `--inverse-dim` | `#3a3a3a` | Secondary copy on the inverse surface |
| `--inverse-line` | `#c7c7c7` | Rules on the inverse surface |
| `--paper-raised` | `#f7f7f7` | Raised panels on the light sections |
| `--brand-yellow` | `#ffd400` | Existing logo plate only |
| `--focus` | `#ffffff` | Keyboard focus ring |

Pure black and pure white are a deliberate brief constraint, not a default. The
page declares `surface: absolute` in its CSS stamp.

## Typography

One family, by request: **Inter Tight**. Display, body and figures share one
face; hierarchy comes from size, weight, leading and tabular numerals, not from a
second face or colour.

| Role | Face | Why |
| --- | --- | --- |
| Display | **Inter Tight 600** | Matches the Mini App and keeps the page in one voice. |
| Body | **Inter Tight 400 / 500** | Long Russian copy stays compact and familiar. |
| Figures | **Inter Tight 500, tabular** | Set schemes, weights, pace and dates align in columns. |

Scale: 12, 14, 16, 20, 24, 32, 44, 60, 84, 108 px. Hero uses
`clamp(52px, 7.2vw, 108px)` with 0.92 leading. Section headings use
`clamp(38px, 4.4vw, 60px)`. Body is 16 to 20 px at 1.5 to 1.6. Running text is
capped at 62ch. Labels are sentence case, never tracked capitals. Visible copy
closes without full stops, by request; decimals and license versions keep their
points. Header type is larger than body: a 24px wordmark, 18px descriptor,
section links and bot link, and a 16px language chip. The header is a floating
rounded bar, slightly wider than the content container, with a 12px top offset
and a 22px radius.

## Grid and spacing

- 12 columns, `max-width: 1400px`, centred.
- Gutter: `clamp(20px, 4vw, 64px)`.
- Column gap: 24px desktop, 16px tablet, 12px phone.
- Baseline: 8px. Spacing tokens: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80,
  96, 120, 144, 160, 192.
- Breakpoints: 720px, 980px, 1200px.
- Hero: 7 columns of copy, 5 columns of log sheet, bottom-aligned; a 3-column
  feature strip below.
- Section head: 5 columns of heading, 7 columns of lede.
- Screens: 5 columns of tabs, 7 columns of the large screenshot stage.
- Program: a real table, 30 / 20 / 50.
- Runs: 7 / 5 split. AI: a single inset panel. Progress: 7 / 5 chart and
  measurements, then an 8-column level rail.
- Final action: 7 / 5 split on the inverse surface.

At 1920px the gutters grow; the 1400px measure and the column counts do not.

## Page shape

1. **Ledger header.** Wordmark, product descriptor, four section links and one
   text link to the bot. The header is a floating rounded bar, slightly wider
   than the content container, with a 12px top offset and a 22px radius. The
   section links track the current section and collapse into a menu on narrow
   screens. After the first scroll it flips to a white bar with a scroll progress
   hairline; the back-to-top control appears while scrolling and hides near the
   footer.
2. **Hero.** A full-bleed black-and-white cardio photograph, an AI assistant
   badge above the headline, a headline and one dominant primary action on the
   left, the log sheet with the week strip on the right, and a four-item feature
   strip along the bottom. The strip items link to the program, runs, progress
   and AI sections. The Telegram button is 66px tall
   on desktop and 48px on phones; the final outline action is 56px.
3. **Three steps.** Open the bot, write a workout, return to progress, set in a
   numbered sequence of circles on a rule.
4. **Screens.** An interactive stage: five app tabs (overview, diary, AI,
   progress, activity), one large screenshot, previous/next arrows and a
   lightbox, with the six-square language row below. Screens switch language
   with the header selector.
5. **Planning.** A light paper well with a sample week, a real table and a
   three-item plan meta row.
6. **Runs and goals.** Light paper panels with a route polyline, nodes, pace,
   pulse and calories, beside a goals checklist with soft-cornered boxes.
7. **AI dialog.** A sample of a natural-language request with three switchable
   prompt chips and the matching result.
8. **Progress.** A sample weight line and volume bars with a 3/6 month switch, a
   latest-measurements panel, and an eight-level ladder with the real badges and
   point thresholds.
9. **Inverse call to action.** A dark ESPADA ENTERTAINMENT developer band with
   the triangle mark, a football-media and product-studio lede, clickable
   ESPADA SPORTS and Tracky rows with their marks, the 4.4K subscriber and 6M
   view figures, and the YouTube link; then the white final action, a target
   circle and the footer mast.

## Interaction

Each control answers a person, not an animation loop:

- header section links with a current-section state and a mobile menu;
- section headers that stay pinned while their section scrolls on desktop;
- hero feature strip links into the product sections and the AI assistant;
- an AI assistant badge above the hero headline names the assistant first;
- week-log exercise rows that open an animated set-chip dropdown over the sheet;
- screen tabs, previous/next arrows, a lightbox and Escape/arrow keys;
- AI prompt chips that swap the request and the reply;
- a 3/6 month chart switch that changes the bars, line and labels;
- the language switcher, copy-handle button and back-to-top control;
- every link with a 160ms hover transition: colour, border and background on
  nav, header and footer links, plus a line that grows from the left in 200ms
  on hover and focus; logos, icons and marks never scale or shift.

English is the default language. The header switcher remembers an explicit
choice for later visits.

No email signup, no logo wall, no testimonials, no invented metrics, no phone or
browser frame, no gradients, no glass, no bento grid, no icon tiles.

## Motion

There is no entrance choreography. Motion answers a person: link underline
movement, the sticky header's white scroll state, the scroll progress hairline,
button colour and a 1px press. Only `color`, `background-color`,
`border-color`, `transform` and `opacity` transition, for 140 to 180ms.
`prefers-reduced-motion: reduce` removes transforms and transitions. Content is
visible by default, the React app has no reveal classes that hide content, and a
`noscript` block keeps the headline and the Telegram action available without
JavaScript.

## Pre-emit critique

P5 H4 E5 S5 R5 V4. The weakest axis is variety: the page is still a landing with
a hero and sections. The log sheet, the ledger rows and the table keep it away
from the AI template by making the product's own record the composition, not a
card grid.
