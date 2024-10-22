import EntitiesController from "../controllers/entities.controller.js"
import express from "express"

class EntitiesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new EntitiesController()
    }

    start() {
        this.router.get("/", this.controller.entitiesWelcome)
        this.router.post("/entities", this.controller.postEntities)
        this.router.get("/entities", this.controller.getAllEntities)
        this.router.get("/entities/cantidad", this.controller.getEntitiesCant)
        this.router.delete("/entities/delete/:id", this.controller.deleteEntities)
        return this.router
    }
}

export default EntitiesRoutes

