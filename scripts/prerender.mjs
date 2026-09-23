// Runs after `vite build` + `vite build --ssr`: renders <App /> to static HTML
// and injects it into dist/index.html so crawlers and first paint don't wait for JS.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const ssrEntry = resolve('dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(ssrEntry).href)
const html = render()

const indexPath = resolve(dist, 'index.html')
const template = readFileSync(indexPath, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
}
writeFileSync(indexPath, template.replace(marker, `<div id="root">${html}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log(`prerender: injected ${Math.round(html.length / 1024)} kB of HTML into dist/index.html`)
