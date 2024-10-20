import fs from "fs"

class EntitiesFsModel {
    constructor() {
        this.entities = "entities.json"
    }

    entitiesWelcome = async () => {
        return "Bienvenidos a Entities"
    }

}

export default EntitiesFsModel