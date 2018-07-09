const fs = require('fs')
const config = require('../config')
const { promisify } = require('util')
const ejsRenderFile = promisify(require('ejs').renderFile)
const build = (distPath,srcPath) => {
    ejsRenderFile(`${srcPath}/index.ejs`, Object.assign({}, config))
    .then((pageContents) => {
        return fs.writeFile(`${distPath}/index.html`, pageContents)
        console.log(`Outputted index.html`)
    }).catch(err=>{
        console.error(err)
    })
}

module.exports = {
    build
}