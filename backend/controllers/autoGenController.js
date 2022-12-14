const users = require('../model/User')
const fsPromises = require('fs').promises
const path = require('path')


//verification middleware
async function userVerification (req, res, next) {
    const user = await users.findOne({username: req.params.username}).exec()
    try {
        if(!user) throw new Error("User not registered or invalid details")
        next()
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}

//File modification to generate T&C and Privacy Policy for users
//A function mounted on the String prototype object to modify a 
//txt file based on an object of regex mapped change pattern as the input
String.prototype.inputUserDetails = function(obj) {
    let modifiedStrings = this;
    for (let x in obj) {
        modifiedStrings = modifiedStrings.replaceAll(new RegExp(x, 'gi'), obj[x]);
    }
    return modifiedStrings;
};

//Terms and Conditions Regex change mapping object
const tcRegexMappings = { 
    "\\[DATE\\]": date,
    "\\[COMPANY INFORMATION\\]": companyInfo,
    "\\[WEBSITE NAME\\]": webName,
    "\\[WEBSITE_URL\\]": webUrl,
    "\\[COPYRIGHT_AGENT_CONTACT_EMAIL\\]": copyrightAgent,
    "\\[WEBSITE_CONTACT_EMAIL\\]": contactMail, 
    "\\[WEBSITE_CONTACT_PAGE_URL\\]": ContactPage
}

//Privacy Policy Regex change mapping object
const ppRegexMappings = { 
    "\\[DATE\\]": date,
    "\\[COMPANY INFORMATION\\]": companyInfo,
    "\\[WEBSITE NAME\\]": webName,
    "\\[WEBSITE_URL\\]": webUrl,
    "\\[WEBSITE_CONTACT_EMAIL\\]": contactMail, 
    "\\[WEBSITE_CONTACT_PAGE_URL\\]": ContactPage
}

async function tcFileModification () {

    try{
        const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 't-c-template.txt'), 'utf-8')
        // console.log(file.inputUserDetails(sample))
    }catch(err){
        console.error(err)
    }
}

async function ppFileModification () {

    try{
        const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 'privacy-policy-template.txt'), 'utf-8')
        // console.log(file.inputUserDetails(sample))
    }catch(err){
        console.error(err)
    }
}

fileModification()

module.exports = { userVerification }
