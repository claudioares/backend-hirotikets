import request from "supertest"
import { App } from "../app"

const app = new App().app


describe('Event test', ()=>{

    it('/POST Event', async()=>{
        const event = {
            title: 'Maria Gadú',
            price: [{sector: 'Pista', amount:'20'}],
            description: 'Event description',
            city: 'São Luis',
            location: {
                latitude: '-2.53073',
                longitude: '-44.3068'
            },
            coupons: [],
            data: new Date(),
            participants: []
        }
        const response = await request(app)
        .post('/events')
        .field('title', event.title)
        .field('description', event.description)
        .field('city', event.city)
        .field('coupons', event.coupons)
        .field('location[latitude]', event.location.latitude)
        .field('location[longitude]', event.location.longitude)
        .field('price[sector]', event.price[0].sector)
        .field('price[amount]', event.price[0].amount)
        .attach('bunner', '')
        .attach('flyers', '')

        expect(response.status).toBe(201)
        expect(response.body).toEqual({messege: 'Evento criado com sucesso!'})
    })
})