import { Request, Response, NextFunction, response } from 'express'
import { EventUseCase } from '../useCase/event.use.case'

class EventsControllers {
    constructor(private eventUseCase:EventUseCase){}
    async create(req:Request, res:Response, next:NextFunction){
        const eventData = req.body
        try {
            await this.eventUseCase.create(eventData)
            return response.status(201).json({messege: 'Evento criado com sucesso!'})
        } catch (error) {
            next(error)
        }
    }
}

export { EventsControllers }