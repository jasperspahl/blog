import rss, { pagesGlobToRssItems} from "@astrojs/rss";
export async function get() {
    return rss({
        title: "jasper's blog",
        description: "My blog about It and Cycling",
        site: "https://jasperspahl.netlify.app/",
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>de-de</language>`
    })
}