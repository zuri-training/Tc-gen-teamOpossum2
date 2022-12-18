const users = require('../model/User')
const fsPromises = require('fs').promises
const path = require('path')


//verification middleware
async function userVerification (req, res, next) {
    const user = await users.findOne({username: req.params.username}).exec()
    try {
        console.log('verify')
        if(!user) throw new Error("User not registered or invalid details")
        console.log('verified')
        next()
    } catch (error) {
        console.log('not verified')
        res.status(400).json({user: user, Error: error.message})
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
    
    const tcModify = (file, formDetails) => {
        const { date, company, country, webName, webUrl, copyrightAgent, contactMail, ContactPage } = formDetails
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

        const modifiedFile = file.inputUserDetails(tcRegexMappings)
        console.log(file.inputUserDetails(tcRegexMappings))

        return modifiedFile
    }

    try{
        if (req.body) {
            console.log(req.body)
            const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 't-c-template.txt'), 'utf-8')
            // console.log(file.inputUserDetails(sample))
            const modifiedFile = tcModify(file, req.body)
            await fsPromises.writeFile(path.join(__dirname, '..', 'files', 'userfiles', 'generated-t-and-c.txt'), modifiedFile)
            const generatedFile = path.join(__dirname, '..', 'files', 'userfiles', 'generated-t-and-c.txt')
            res.download(generatedFile)
            next()
        } else {
            console.log("err")
            throw new Error('No Form Details')
        }
    }catch(err){
        // console.log('finally')
        // console.error(err)
        const log = new String(err)
        await fsPromises.appendFile(path.join(__dirname, '..', 'files', 'error-log', 'tc-log.txt'), `\n ${log}` )
    }
}

async function ppFileModification (req, res, next) {

    const ppModify = (file, formDetails) => {
        const { date, company, country, webName, webUrl, contactMail, ContactPage } = formDetails

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
        const modifiedFile = file.inputUserDetails(ppRegexMappings)

        return modifiedFile
    }



    try{
        if (req.body) {
            const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 'privacy-policy-template.txt'), 'utf-8')
            // console.log(req.body)
            // console.log(file.inputUserDetails(sample))
            const modifiedFile = ppModify(file, req.body)
            await fsPromises.writeFile(path.join(__dirname, '..', 'files', 'userfiles', 'generated-privacy-policy.txt'), modifiedFile)
            const generatedFile = path.join(__dirname, '..', 'files', 'userfiles', 'generated-privacy-policy.txt')
            res.download(generatedFile)
            next()
        } else {
            // console.log(req.body)
            throw new Error("no form details")
        }
    }catch(err){
        //console.error(err)
        const log = new String(err)
        await fsPromises.appendFile(path.join(__dirname, '..', 'files', 'error-log', 'pp-log.txt'), `\n${log}` )
    }
}

// fileModification()

module.exports = { userVerification, tcFileModification, ppFileModification }
