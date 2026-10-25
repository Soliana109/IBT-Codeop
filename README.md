# Soli's Mart

A shop front built with Next.js (App Router). Products, prices, ratings, reviews and pictures come live from the
[DummyJSON](https://dummyjson.com/docs/products) public API, which needs no key.

## Run it

```bash
npm install
npm run check-api   # calls the same endpoints the site uses and prints PASS or FAIL
npm run dev         # http://localhost:3000
```

`npm run check-api` is the quickest way to confirm the API works from your network before you start the site.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Hero, shop with category tabs and sorting, story, newsletter, FAQ |
| `/?favorites=1` | The same shop, filtered to the products you saved with the heart |
| `/product/[id]` | Gallery, price, reviews, delivery info, add to bag, related products |
| `/cart` | Quantities, free-delivery progress, demo checkout |

The bag and favourites are saved in `localStorage`.

## How the data flows

- `lib/api.js` calls `/products/category/{slug}?limit=100` for `groceries`, `kitchen-accessories` and
  `home-decoration` (shown as Pantry, Kitchen and Home) and `/products/{id}` for the product page.
- Every API product goes through `normalize()`, which gives each field a safe fallback.
- If one category fails, the others still load. If all fail, the error page shows with a "Try again" button.
- Pages render on request, so `next build` never needs the API. Responses are cached for 24 hours.
- Pictures are plain `<img>` tags loaded by the browser from DummyJSON's CDN. A failed picture shows a labelled tile.
- DummyJSON prices are in US dollars. `lib/api.js` converts them to birr with a sample rate (`RATE = 150`). Change it there.

## Deploy

Push to GitHub and import the repo on Vercel. No environment variables are needed.

## Theme

Colours are CSS variables at the top of `app/globals.css` (bordeaux, champagne, blush paper, plum-black ink; dark mode follows the system). Fonts are Bodoni Moda and Jost.
