const request = require('request')
const fs = require('fs')
const build = (distPath,srcPath) => {
    request('https://docs.google.com/document/d/1jpRePU5O0_mVabea1HAyH6IiFgr6pla4kvJYOG08Ufw/export?format=pdf')
    .pipe(fs.createWriteStream(`${distPath}/resume.pdf`))
}

module.exports = {
    build
}