import express, {Express, Request, Response} from 'express'

const app: Express = express()


app.get('/', (req:Request, res:Response) => {
    res.send('Hola mundo!!')
}) 

app.listen(3500, () => {
    console.log('Listening in port https://Localhost:3500')
})