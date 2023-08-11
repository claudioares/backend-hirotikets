import {Schema, model} from 'mongoose'

const eventSchema = new Schema({
    title: String,
    location: {
        latitude: String,
        longitude: String
    },
    data: Date,
    createdAt:{
        type:Date,
        default:Date.now
    },
    description: String,
    categories: [String],
    bunner: String,
    flyers: [String],
    price: {
        type: Array
    },
    city: String,
    participantes: {
        type: Array,
        ref: 'User'
    }
})

const EventModel = model('Event', eventSchema)

class EventRepositoryMongoose {
    async add(event:Event): Promise<Event> {
        const eventModel = new EventModel(event)
        await eventModel.save()
        return event
    }
}

export { EventRepositoryMongoose }