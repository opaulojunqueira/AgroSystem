const Parser = require('rss-parser');
const parser = new Parser();

async function agroNewsRSS() {
    const parseURL = await parser.parseURL('https://g1.globo.com/rss/g1/economia/agronegocios/');

    return { title_0: parseURL.items[0].title, descripton_0: parseURL.items[0].content.substr(0, 150) + '...', link_0: parseURL.items[0].link,  title_1: parseURL.items[1].title, descripton_1: parseURL.items[1].content.substr(0, 150) + '...', link_1: parseURL.items[1].link }
}

module.exports = agroNewsRSS;