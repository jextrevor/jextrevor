const fse = require("fs-extra")
const path = require("path")
const { promisify } = require('util')
const globP = promisify(require('glob'))


const distPath = './public'
const srcPath = './src'

fse.emptyDirSync(distPath)

globP('**/*.build.js', { cwd: `${srcPath}`}).then((files)=>{
    files.forEach((file)=>{
        const { build } = require(`${srcPath}/${file}`)
        build(distPath,srcPath)
        console.log(`Executed ${file}`)
    })
}).catch(err=>{
    console.error(err)
})
// globP('**/*.ejs', { cwd: `${srcPath}`}).then((files)=>{
//     files.forEach((file)=>{
//         const fileData = path.parse(file)
//         const destPath = path.join(distPath, fileData.dir)

//         fse.mkdirs(destPath).then(() => {
//             return ejsRenderFile(`${srcPath}/${file}`, Object.assign({}, config))
//         }).then((pageContents) => {
//             fse.writeFile(`${destPath}/${fileData.name}.html`, pageContents)
//             console.log(`Outputted ${fileData.name}.html`)
//         }).catch(err=>{
//             console.error(err)
//         })
//     })
// })