import EntitiesService from "../services/entities.service.js"

class EntitiesController {
    constructor() {
        this.service = new EntitiesService()
    }

    entitiesWelcome = async (req, res) => {
        const msg = await this.service.entitiesWelcome()
        res.send(msg)
    }

    postEntities = async (req, res) => {
        const entity = req.body
        const newEntity = await this.service.postEntities(entity)
        res.send(newEntity)
    }

    getAllEntities = async (req, res) => {
        const entities = await this.service.getAllEntities()
        res.send(entities)
    }

    getEntitiesCant = async (req, res) => {
        const cantEntities = await this.service.getEntitiesCant()
        res.send(cantEntities)
    }

    deleteEntities = async (req, res) => {
        const { id } = req.params
        const deleteEntity = await this.service.deleteEntities(id)
        res.send(deleteEntity)
    }
}

export default EntitiesController


