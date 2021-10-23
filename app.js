require('dotenv').config()


const log = require('signale')

const { Elarian } = require('elarian')

//create a connection

const start = () => {
    client = new Elarian({
        appId: process.env.APP_ID,
        orgId: process.env.ORG_ID,
        apiKey:process.env.APP_KEY
    })
    client
        .on('error', (error) => {
            log.warn(`${error.message || error }.Attempting to reconnect...`)
            client.connect()
        })
        .on('connected', () => {
            console.log('connected to Elarian..')

            const customer = new client.Customer({
                provider:'cellular',
                number: '+254790841979'
            })

            const resp = customer.sendMessage(
                {channel:'whatsapp', number:'2222'},
            )
            {
                body: {
                    text:'dmsndsmdn'
                }
            }
        })
}