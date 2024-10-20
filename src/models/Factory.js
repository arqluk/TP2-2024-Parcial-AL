import EntitiesMsModel from "./DAO/entities.model.ms.js"
import EntitiesFsModel from "./DAO/entities.model.fs.js"

class Factory {
    static get(persistence) {
        switch (persistence) {
            case "MS":
                console.log("Persistiendo en la memoria del Servidor.")
                return new EntitiesMsModel();
            case "FS":
                console.log("Persistiendo en la memoria de File System.")
                return new EntitiesFsModel();
            default:
                console.log("Persistiendo en la memoria por default.")
                return new EntitiesMsModel();
        }
    }
}

export default Factory