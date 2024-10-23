class EntitiesMsModel {
    constructor() {
        this.entities = [
            { id: 1, tipo: "retiro", monto: 1000, destinatario: "Juan Perez" }
        ]
    }

    entitiesWelcome = async () => {
        return "Bienvenidos a Entities"
    }

    postEntities = async (entity) => {
        if (this.entities.length < 1) {
            entity.id = 1
        } else {
            entity.id = this.entities[this.entities.length - 1].id + 1
        }
        this.entities.push(entity)
        return entity
    }

    getAllEntities = async () => {
        return await this.entities
    }

    getEntitiesCant = async () => {
        return `Cantidad de transacciones en cuenta: ${this.entities.length}`
    }

    deleteEntities = async (identificador) => {
        const index = this.entities.findIndex((entity) => entity.id == identificador)
        if (index == -1) throw Error("El id de la transaccion no existe.")
        this.entities.splice(index, 1)
        return "La transaccion fue eliminada exitosamente"
    }

}

export default EntitiesMsModel

