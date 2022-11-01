const agroNewsRSS = require("./rss");

async function agroNewsFeed() {

    let content = (await agroNewsRSS()).items
    let feedHTML = []

    for (let i = 0; i < 1; i++) {
        feedHTML.push(`<div class="card w-75"><div class="card-body"><h5 class="card-title">${await content[i].title}</h5><p class="card-text">${await content[i].content.substr(0, 150) + '...'}</p><a href="${await content[i].link}" target="_blank" class="btn btn-success">Ler mais</a></div></div>`)
    }

    return feedHTML
}

module.exports = agroNewsFeed;