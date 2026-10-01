# Catalin Avarvarei — Next.js website

The 17-page static website has been migrated to Next.js App Router with TypeScript. The existing design and content are preserved, with the About portrait removed, a subtle homepage hero pattern, a Pathlock email template case study, a name-based vector logo, and a downloadable CV. Next.js serves the `app/` pages and required `public/` assets. Legacy HTML pages, unused assets, and generated reports have been removed.

## Run locally

Requires Node.js 20.9 or newer (verified with Node.js 24).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. To test the production build:

```sh
npm run build
npm run start
```

Deploy to a host that supports Next.js, such as Vercel or a Node.js server. Deploy the Next.js application with its `public/` assets; legacy URL redirects are configured in `next.config.ts`.

## Settings

Only `.env.example` is committed. Keep actual environment settings in the ignored `.env.local` file and configure production values in your hosting provider. The GitHub repository URL is not the production website origin.

Edit `.env.local` locally or set these environment variables on your hosting provider. Rebuild and redeploy after changing settings because pages and public configuration are generated at build time. No account password or API token is required.

| Variable                        | Purpose                                                                            | Default                                        |
| ------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Your production HTTPS origin, without a trailing slash, e.g. `https://example.com` | Unset                                          |
| `SITE_INDEXABLE`                | Set to `true` when the production website is ready for indexing                    | `false`                                        |
| `PUBLISH_JOURNAL_ARTICLES`      | Set to `true` only after approving the three sample articles                       | `false`                                        |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 web stream ID, e.g. `G-XXXXXXXXXX`                                             | Disabled                                       |
| `GOOGLE_SITE_VERIFICATION`      | Content value from Search Console's HTML meta verification tag                     | Unset                                          |
| `NEXT_PUBLIC_CALENDLY_URL`      | HTTPS Calendly event URL                                                           | `https://calendly.com/avarvarei-catalin/30min` |

Public environment variables are included in the site bundle. Measurement and verification IDs are intended to be public. Never place private credentials in these fields.

### Google Analytics

Create a GA4 property and web data stream, copy its measurement ID, and set `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Visitors can accept or decline analytics with equal controls. Google scripts load only after acceptance; privacy settings in the footer allow withdrawal. The preference is saved in browser local storage. Advertising consent remains denied.

The site explicitly sends one `page_view` after consent and on each Next.js pathname change. In GA4's Enhanced Measurement settings, disable **Page changes based on browser history events** to avoid duplicate views. `send_page_view: false` disables Google's initial automatic page view. Validate using GA4 Realtime after deployment. URL fragments and query-only changes are not counted as separate pages.

### Google Search Console

Create a URL-prefix property matching the production domain. Choose HTML tag verification, copy only the `content` value, set `GOOGLE_SITE_VERIFICATION`, and redeploy. Verify ownership in Search Console and submit `https://YOUR-DOMAIN/sitemap.xml`. A Domain property instead uses DNS verification at your domain provider; it does not use this setting.

### Calendly

The 30-minute event from the original site is configured. On `/book-a-call`, visitors select **Show available times** to load the inline calendar and complete a booking without leaving the site. Calendly's cookie controls remain available. Closing the calendar removes the iframe. An external booking link and email fallback remain available when JavaScript is disabled or the embed fails.

Calendar loading is independent of analytics consent. No Calendly script or request is sent before the visitor requests the calendar. Event availability, connected calendars, meeting locations, and booking confirmations are managed in your Calendly account. The website needs no Calendly API key. Verify a real event booking and confirmation before launch.

## SEO and AI discoverability

- Static server-rendered HTML, semantic headings, and crawlable internal links.
- Unique page titles and descriptions, canonical URLs when the domain is configured, Open Graph and Twitter metadata, and a generated social image.
- `Person`, `WebSite`, `WebPage`, breadcrumb, and service structured data using existing site facts.
- `/sitemap.xml` and `/robots.txt` respond to launch settings.
- `/llms.txt` provides a concise public content guide and contact/booking links. It is a supplementary convention, not a guarantee of inclusion in any AI system.
- Permanent redirects from the original `.html` URLs to clean routes.
- Draft journal articles and legal pages remain `noindex` and are omitted from the sitemap. Draft articles are also omitted from the AI guide. `noindex` is not access protection; draft content is still publicly readable through links.

Until a domain is configured and `SITE_INDEXABLE=true`, all pages stay `noindex` and robots disallows crawling. Keep preview deployments at that setting. This prevents localhost or an assumed domain from becoming production canonicals.

## Performance

All content routes are pre-rendered. The website uses local system fonts, responsive Next.js image optimization, small client components for interactions, and no third-party scripts on the initial visit. Calendly loads on demand and analytics loads after consent.

The final local mobile audit measured 100 performance, accessibility, best practices, and SEO on Home, About, and Booking with indexing enabled in a temporary test configuration. Earlier performance runs measured 99–100. Run `npm run audit:performance` to generate fresh results in `reports/performance-summary.json` and HTML reports in `reports/`. Generated reports are ignored by Git. The live Calendly event name and available dates were verified without submitting a booking.

A Lighthouse score of 100 is a target, not a permanent guarantee: hosting, network conditions, measurement variability, analytics consent, and the loaded calendar affect results. Repeat the audit on the production domain and monitor Core Web Vitals after launch.

## Validation

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm test
npm run audit:performance
```

Browser tests cover all routes, titles, internal destinations, legacy redirects, 404 handling, mobile navigation, the About layout, crawl files, and on-demand calendar behavior. Calendly is mocked for repeatable tests; real availability and booking must be verified against your account. Analytics tests run when a measurement ID is configured and mock Google requests so tests send no telemetry.

For an isolated configuration test (use test IDs, then rebuild with real deployment settings):

```sh
NEXT_PUBLIC_SITE_URL=https://example.com SITE_INDEXABLE=true NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123 GOOGLE_SITE_VERIFICATION=test-verification npm run build
NEXT_PUBLIC_SITE_URL=https://example.com SITE_INDEXABLE=true NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123 GOOGLE_SITE_VERIFICATION=test-verification npm test
npm run build
```

## Content and launch review

The original project narratives describe contributions to ApprovalMax, charles, Pathlock, and a migration through DataArt. Confirm permission and wording before publishing named client details. Journal articles remain sample drafts. The four legal pages retain their draft notices and operator placeholders; cookie/privacy descriptions have been updated to match the new integration behavior. Complete operator, hosting, retention, provider, and effective-date details before launch.

No production domain, GA4 property, Search Console property, hosting account, or real booking has been created by this migration.

## Source guidance

- [Next.js metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [GA4 pageview measurement and automatic history events](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [Google consent mode](https://developers.google.com/tag-platform/security/guides/consent)
- [Calendly inline embedding](https://calendly.com/help/embed-options-overview)

## CV and logo

The supplied CV is served unchanged at `/downloads/catalin-avarvarei-cv.pdf`, with download buttons on Home and About. Replace that file to update your CV. The shared header/footer use the custom vector wordmark at `public/catalin-avarvarei-logo.svg`.
