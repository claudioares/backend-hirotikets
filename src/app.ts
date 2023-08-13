import express, { Application } from 'express'
import { connectDataBase } from './infra/database'
import { errorMiddlewares } from './middlewares/erro.middlewares'
import { EventRoutes } from './routes/event.routes'

class App {
    public app: Application
    private eventRoutes = new EventRoutes
    constructor(){
        this.app = express()
        this.middlewaresInitialize()
        this.initializeRoutes()
        this.interceptionError()
        connectDataBase()
    }
    private initializeRoutes(){
        this.app.use("/events", this.eventRoutes.router)
    }
    private interceptionError(){
        this.app.use(errorMiddlewares)
    }
    private middlewaresInitialize(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true}))
    }
    listen(){
        this.app.listen(3000, ()=>console.log('Server running!'))
    }
}
export { App };