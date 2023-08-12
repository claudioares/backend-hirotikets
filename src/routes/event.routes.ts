import {Router} from 'express'
import { EventRepositoryMongoose } from '../repositories/event.repository.mongoose'
import { EventsControllers } from '../controllers/events.controllrs'
import { EventUseCase } from '../useCase/event.use.case'

class EventRoutes {
    public router: Router
    private eventController: EventsControllers
    constructor(){
        this.router = Router()
        const eventsRepository = new EventRepositoryMongoose()
        const eventUseCase = new EventUseCase(eventsRepository)
        this.eventController = new EventsControllers(eventUseCase)
        this.initRoutes()
    }

    initRoutes() {  
        this.router.post('/', this.eventController.create.bind(this.eventController))
    }
}

export {EventRoutes}