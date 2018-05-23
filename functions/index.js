const functions = require('firebase-functions');
const http = require('requestify');
const cors = require('cors')({ origin: true });
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

exports.appSearchProxy = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const searchData = req.query.searchData
        const opSystem = req.query.opSystem

        const url = formatUrl(searchData, opSystem)

        // Send request to SearchMan
        return http.get(url).then(response => {
            return res.status(200).send(response.getBody())
        })
        .catch(err => {
            return res.status(400).send(err)
        })
    })
})

function formatUrl(searchData, opSystem){
    const apiKey = functions.config().searchman.key
    console.log(apiKey)
    return `http://api.searchman.io/v1/${opSystem}/us/apps?appIds=${searchData}&apiKey=${apiKey}`
}