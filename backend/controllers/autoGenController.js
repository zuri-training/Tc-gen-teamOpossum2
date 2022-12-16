const users = require('../model/User')
const fsPromises = require('fs').promises
const path = require('path')


//verification middleware
async function userVerification (req, res, next) {
    const user = await users.find({username: req.params.username})
    try {
        if(!user) throw new Error("User not registered or invalid details")
        next()
    } catch (error) {
        res.status(400).json({user: req.params.username, Error: error.message})
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


async function tcFileModification (req, res, next) {

    const { date, company, country, webName, webUrl, copyrightAgent, contactMail, ContactPage } = req.body

    //Terms and Conditions Regex change mapping object
    const tcRegexMappings = { 
        "\\[DATE\\]": date,
        "\\[COMPANY INFORMATION\\]": company,
        "\\[COMPANY COUNTRY\\]": country,
        "\\[WEBSITE NAME\\]": webName,
        "\\[WEBSITE_URL\\]": webUrl,
        "\\[COPYRIGHT_AGENT_CONTACT_EMAIL\\]": copyrightAgent,
        "\\[WEBSITE_CONTACT_EMAIL\\]": contactMail, 
        "\\[WEBSITE_CONTACT_PAGE_URL\\]": ContactPage
    }

    try{
        const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 't-c-template.txt'), 'utf-8')
        // console.log(file.inputUserDetails(sample))
        file.inputUserDetails(tcRegexMappings)
        await fsPromises.writeFile(path.join(__dirname, '..', 'files', 'userfiles', 'generated-t-and-c.txt'), file)
        const generatedFile = path.join(__dirname, '..', 'files', 'userfiles', 'generated-t-and-c.txt')
        res.download(generatedFile)
        next()
    }catch(err){
        //console.error(err)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'error-log', 'tc-log.txt'), err )
    }
}

async function ppFileModification (req, res, next) {

    const { date, company, country, webName, webUrl, contactMail, ContactPage } = req.body

    //Privacy Policy Regex change mapping object
    const ppRegexMappings = { 
        "\\[DATE\\]": date,
        "\\[COMPANY INFORMATION\\]": company,
        "\\[COMPANY COUNTRY\\]": country,
        "\\[WEBSITE NAME\\]": webName,
        "\\[WEBSITE_URL\\]": webUrl,
        "\\[WEBSITE_CONTACT_EMAIL\\]": contactMail, 
        "\\[WEBSITE_CONTACT_PAGE_URL\\]": ContactPage
    }

    try{
        const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 'privacy-policy-template.txt'), 'utf-8')
        // console.log(file.inputUserDetails(sample))
        file.inputUserDetails(ppRegexMappings)
        await fsPromises.writeFile(path.join(__dirname, '..', 'files', 'userfiles', 'generated-privacy-policy.txt'), file)
        const generatedFile = path.join(__dirname, '..', 'files', 'userfiles', 'generated-privacy-policy.txt')
        res.download(generatedFile)
        next()
    }catch(err){
        //console.error(err)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'error-log', 'pp-log.txt'), err )
    }
}

// fileModification()

module.exports = { userVerification, tcFileModification, ppFileModification }
