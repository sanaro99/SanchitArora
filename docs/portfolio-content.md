# Portfolio content and assets

Content reviewed October 2, 2026. The portfolio keeps current products, research, prototypes, and earlier work together, with a visible stage on each project card. A source link does not imply a public demo is available.

## Project references

| Project | Reference | What the card describes |
| --- | --- | --- |
| Applination | [Repository](https://github.com/sanaro99/applination), [app](https://applination.sanchitarora.me) | Job matching, tailored documents, tracking, interview preparation, extension and local-model support. Proposed batch-processing work is not advertised as shipped. |
| Trusten | [Repository](https://github.com/sanaro99/trusten) | Headless scanning, extension, dashboard and evidence reports. Findings indicate possible manipulation and regulatory implications. |
| Kalp | [Repository](https://github.com/sanaro99/kalp) | Local journal, activities, focus check-ins, small changes and weekly review. Observed associations do not establish causation. |
| CoupleOGames | [Repository](https://github.com/sanaro99/coupleogames) | Four synchronized two-player games. Public launch remains on hold. |
| Luggist | [Repository](https://github.com/sanaro99/Luggist), [app](https://luggist.sanchitarora.me) | Offline packing tracker, templates and optional AI assistance. AI features send their task context to the configured provider. |
| ASL gloss research | [Repository](https://github.com/sanaro99/sign-lang-gen) | Stage 1 gloss/marker translation and four-condition evaluation. No claim of validated interpreter quality or complete video generation. |
| GenASL | [Repository](https://github.com/sanaro99/GenASL) | Overlay prototype and avatar direction still in build-out. |
| Sanchit Cloud | [Original blog](https://www.sanchitarora.me/blog/self-hosting) | Storage, backups and application hosting. Private deployment details are omitted. The blog records the original build rather than a current infrastructure runbook. |
| NBT-Gen | [Repository](https://github.com/sanaro99/NBT-Gen) | Best-of-N ideas, comparative judging and transparent fallback scoring. Novelty scores are not proof that an idea has never existed. |

The TestSprite entry describes personal engineering contributions. The [official public CLI repository](https://github.com/TestSprite/testsprite-cli) is the source of the company logo; its vector viewport is limited to the existing symbol for the experience avatar. Internal analytics, ticket records, credentials and private screenshots are not published here.

## Visual provenance

All product screenshots are from the actual applications or their existing repository documentation. They are not AI-generated mockups.

| Asset | Context |
| --- | --- |
| `public/projects/applination.png` | Fictional shared demo application tracker; AI responses in this demo are simulated. |
| `public/projects/trusten.png` | Repository dashboard screenshot with sample scan history. |
| `public/projects/kalp.jpg` | Repository web-preview screenshot with test journal entries. |
| `public/projects/coupleogames.png` | Repository sample table for Alex and Jamie. |
| `public/projects/luggist.jpg` | Sample weekend trip created from the live app's built-in template; no personal packing list. |
| `public/projects/genasl.png` | Extension interface from the earlier overlay prototype, not proof of finished avatar synthesis. |
| `public/projects/nbt-gen.jpg` | Local application interface with a sample topic; no generated result or paid inference was used. |
| `public/projects/asl-research.svg` | Code-native overview of the implemented research stages and comparison conditions; not a product screenshot. |
| `public/projects/applination-{board,detail,coach}.png` | Additional screens of the same fictional John Doe demo; simulated AI responses. |
| `public/projects/applination-walkthrough.webm` | Existing demo recording showing navigation through application tracking, generated documents and interview preparation. Fictional candidate and simulated AI responses. |
| `public/projects/trusten-{audit,report}.png` | Repository audit form and sample report for an example domain. |
| `public/projects/kalp-{today,reflection,insights}.jpg` | Repository mobile web previews with test journal entries. |
| `public/projects/coupleogames-{in-sync,clue-quest}.png` | Repository sample game rounds for Alex and Jamie. |

Existing historical images and documented work, education, awards and certificates are retained. AIMS competition and UBS engineer certification records have no available image; those cards display a text fallback. AZ-900 links to Microsoft's certification information and is labeled **Certification details**. Do not replace missing certificates with another credential's image.

## Keeping the site current

Update `src/data/resume.tsx` and add genuine assets under `public/`. For a project, verify the description against its current implementation, set an accurate stage, and choose the live app, source or write-up as its primary destination. Keep captions on sample data and older prototypes. Recheck dated claims and performance numbers before changing them.

Project cards accept an optional `media` array. Each entry has `type` (`image` or `video`), `src`, descriptive `alt`, and an optional `caption`; a video can also have a `poster`. Put the cover image first. Existing single `image`/`video` fields remain supported when no gallery array is supplied. The gallery loads video metadata only when its slide is selected, uses native playback controls without autoplay, and stops playback when changing slides or closing. Visitors can use arrows, thumbnails, keyboard keys or a horizontal swipe; Escape, the visible close button and the backdrop dismiss the viewer.

Run the validation commands in the README. Check image rendering and mobile layout in both themes, keyboard expansion of work/education cards, internal blog destinations, and the social preview image. Keep secrets and private infrastructure details out of both text and screenshots.
