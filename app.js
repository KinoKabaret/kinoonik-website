const express = require('express')
const cors = require('cors')
const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

const ipfsOptions = {
    EXPERIMENTAL: {
        pubsub: true
    },
}

// Create IPFS instance
const ipfs = new IPFS(ipfsOptions)

ipfs.on('ready', () => {
    // Create OrbitDB instance
    const orbitdb = new OrbitDB(ipfs)
})

const app = express()
app.use(cors())

app.get('/', function (req, res) {
    express.static(__dirname)
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
