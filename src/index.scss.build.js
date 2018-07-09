const sass = require('node-sass')
const fs = require('fs')
const build = (distPath,srcPath) => {
    sass.render({
        file:`${srcPath}/index.scss`
    }, (err, result) =>{
        if(err){
            console.error(err)
            return
        }
        fs.writeFileSync(`${distPath}/index.css`,result);
        console.log("Outputted index.css")
    })
}
module.exports = {
    build
}