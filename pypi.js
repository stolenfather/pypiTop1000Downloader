#!/user/bin/env node

const execSync = require('child_process').execSync;
const pypiPackages = require('./pypi.json').rows

const packag = pypiPackages.map(a => a.project);

packag.forEach((package) => {
    console.log("instaling package " + package)
    try{
        execSync("python -m pip download  " + package);
    }
    catch(error){
        console.log("cant install pacakae " + package)
    }
})