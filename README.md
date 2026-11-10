# MAPME website

Source of <https://www.mapme-initiative.org/> – a static site built with [Hugo](https://gohugo.io/)
and published with GitHub Pages. Content is plain Markdown; there is no database, no CMS, no
JavaScript framework and no package manager. The only tool you need is the `hugo` binary.

## Preview locally

```bash
brew install hugo        # once (any "extended" Hugo ≥ 0.146 works; CI uses 0.160.1)
hugo server              # then open http://localhost:1313
```

## Publish

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it.
One-time setup in the GitHub repository: **Settings → Pages → Source: GitHub Actions**, then add the
custom domain `www.mapme-initiative.org` there and point the DNS `CNAME` record to `<org>.github.io`.

## Where things are

| Path | What |
|---|---|
| `content/` | All pages as Markdown. The file path is the URL (`content/projects.md` → `/projects/`). |
| `content/blog/` | News posts (`/blog/<name>/`). The `/news/` overview is generated automatically. |
| `content/case-studies/` | Case studies; they also appear in the news overview. |
| `static/images/`, `static/files/` | Images and downloads (PDF). Referenced as `/images/…`, `/files/…`. |
| `data/forms.json` | Field definitions of the three forms. |
| `hugo.toml` | Site settings, navigation menu, contact details, newsletter link. |
| `layouts/` | HTML templates. `layouts/_shortcodes/` holds the building blocks used in Markdown. |
| `assets/css/main.css` | The whole design (colours and fonts are variables at the top). |

## Write a news post

```bash
hugo new content blog/my-new-post.md
```

Fill in the front matter (title, date, kicker, image, categories) and write Markdown below it.
Put images into `static/images/` – large photos are resized automatically at build time.
The post shows up on `/news/` and on the homepage ("latest news") by itself.

## Building blocks (shortcodes)

Normal Markdown works everywhere. For layout, pages use a few shortcodes:

| Shortcode | Purpose |
|---|---|
| `{{< section bg="primary" >}} … {{< /section >}}` | A page band. `bg`: empty, `primary` (teal), `secondary` (orange), `inverted` (grey, white cards), `cards` (pastel cards). |
| `{{< hero image="/images/x.png" >}} # Title … {{< /hero >}}` | Page header with title, intro and buttons. |
| `{{< button href="/x/" style="primary" >}}Label{{< /button >}}` | Button. `style`: `primary`, `secondary`, `outline`; `wide="true"`. |
| `{{< figure src="…" caption="…" >}}` | Image with caption (click to enlarge). |
| `{{< textpic image="…" side="right" caption="…" >}} text {{< /textpic >}}` | Text beside an image. `layout="wrap"` lets text flow around it; `images="a,b"` makes a slider. |
| `{{< columns count="3" >}}{{< column image="…" >}} … {{< /column >}}{{< /columns >}}` | Equal columns / icon cards. |
| `{{< split ratio="1-2" >}}` + two `column`s | Two unequal columns. |
| `{{< cards >}}{{< card title="…" image="…" >}} … {{< /card >}}{{< /cards >}}` | Bordered cards (`layout="horizontal"` for image-left cards). |
| `{{< accordion >}}{{< accordion-item title="…" >}} … {{< /accordion-item >}}{{< /accordion >}}` | Collapsible sections. |
| `{{< logos >}}{{< logo src="…" href="…" >}}{{< /logos >}}` | Partner logo row. |
| `{{< gallery images="a.jpg,b.jpg" >}}`, `{{< slider images="…" >}}`, `{{< image-row >}}` | Photo grid, slider, images side by side. |
| `{{< stats >}}{{< stat value="3" label="…" >}}{{< /stats >}}`, `{{< steps >}}{{< step num="1" title="…" >}}`, `{{< callout title="…" >}}`, `{{< alert >}}` | Article extras. |
| `{{< latest-news count="6" >}}`, `{{< newsletter >}}`, `{{< form "contact" >}}`, `{{< social >}}`, `{{< anchor "name" >}}` | Site widgets. |

A line such as `{.lead}`, `{.center}`, `{.eyebrow}`, `{.small}` or `{.muted}` directly below a
paragraph styles that paragraph; on headings write `## Title {.center}`.

## Forms

GitHub Pages cannot process forms. By default the three forms (contact, Geo4Impact registration and
contribution) open the visitor's e-mail program with the entered data. To receive submissions
directly, create an endpoint at a form service (e.g. Formspree) and set `formEndpoint` in `hugo.toml`.
