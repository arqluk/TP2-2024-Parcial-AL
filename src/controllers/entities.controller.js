import EntitiesService from "../services/entities.service.js"

class EntitiesController {
    constructor() {
        this.service = new EntitiesService()
    }

    entitiesWelcome = async (req, res) => {
        const msg = await this.service.entitiesWelcome()
        res.send(msg)
    }
}

export default EntitiesController
