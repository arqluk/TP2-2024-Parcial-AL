import Factory from "../models/Factory.js"

class EntitiesService {
    constructor() {
        this.model = Factory.get("FS")
    }

    entitiesWelcome = async () => {
        const msg = await this.model.entitiesWelcome()
        return msg
    }

    postEntities = async (entity) => {
        const newEntity = await this.model.postEntities(entity)
        return newEntity
    }

    getAllEntities = async () => {
        const entities = await this.model.getAllEntities()
        return entities
    }

    getEntitiesCant = async () => {
        const cantEntities = await this.model.getEntitiesCant()
        return cantEntities
    }

    deleteEntities = async (identificador) => {
        return this.model.deleteEntities(identificador)
    }
}

export default EntitiesService

