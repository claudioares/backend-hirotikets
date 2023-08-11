import {Router} from 'express'
import { EventRepositoryMongoose } from '../repositories/event.repository.mongoose'
import { EventsControllers } from '../controllers/events.controllrs'
import { EventUseCase } from '../useCase/event.use.case'

class EventRoutes {
    public router: Router
    private eventUseCase: EventUseCase
    eventController: EventsControllers
    constructor(){
        this.router = Router()
        const eventsRepository = new EventRepositoryMongoose()
        this.eventUseCase = new EventUseCase(eventsRepository)
        this.eventController = new EventsControllers(this.eventUseCase)
        this.initRoutes()
    }

    initRoutes() {
        this.router.post('/')
    }
}

export {EventRoutes}