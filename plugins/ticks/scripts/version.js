import fs from 'fs'
// avoid requiring our whole package.json file
// make a small file for our version number
let pkg = JSON.parse(fs.readFileSync('./package.json').toString())

fs.writeFileSync('./_version.js', `export default '${pkg.version}'`)
