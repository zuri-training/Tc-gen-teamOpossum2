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
//regex solution 1
String.prototype.inputUserDetails = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'gi'), obj[x]);
    }
    return retStr;
};

//console.log('[NUMBER] is [DATE]'.allReplace({'\\[DATE]': 'today', '\\[NUMBER\\]': 'Five'}));

async function fileModification () {
    const sample = { "\\[WEBSITE_CONTACT_EMAIL\\]": "ade@gmail.com" }

    try{
        const file = await fsPromises.readFile(path.join(__dirname, '..', 'files', 't-c-template.txt'), 'utf-8')
        console.log(file.allReplace(sample))
    }catch(err){
        console.error(err)
    }
}

fileModification()

module.exports = { userVerification }
