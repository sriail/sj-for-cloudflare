# scramjet-templates

Ready-to-use setup files for [Scramjet](https://github.com/MercuryWorkshop/scramjet).
Pick a template, follow its README, and you have a working web proxy.

## Templates

| Template | Path | Notes |
| --- | --- | --- |
| HTML/JS | [`templates/html/2.0.67-alpha.1`](templates/html/2.0.67-alpha.1) | No build step. Scramjet files are included, just serve the folder. |
| React | [`templates/react/2.0.67-alpha.1`](templates/react/2.0.67-alpha.1) | A component. You install the packages and copy the runtime files into `public/`. |

Each template's README has the full setup guide.

## Supported versions

- v2.0.67-alpha.1

## React note

The `react` template does not include the Scramjet, Epoxy, or Libcurl files. Install
them with your own package manager. We recommend [bun](https://bun.sh).