import fs from "fs"

class EntitiesFsModel {
    constructor() {
        this.entities = "entities.json"
    }

    entitiesWelcome = async () => {
        return "Bienvenidos a Entities"
    }

    postEntities = async (entity) => {
        // Leer el archivo entities.json
        let entitiesJs = await fs.promises.readFile(this.entities, "utf-8");

        // Convertir el string en un array de objetos
        entitiesJs = JSON.parse(entitiesJs);

        // Asignar un nuevo id a la transaccion
        entity.id = entitiesJs[entitiesJs.length - 1].id + 1;

        // Agregar la nueva transaccion al array
        entitiesJs.push(entity);

        // Escribir el array actualizado de vuelta al archivo entities.json
        await fs.promises.writeFile(this.entities, JSON.stringify(entitiesJs, null, 2))

        return entity;
    }

    getAllEntities = async () => {
        return await fs.promises.readFile(this.entities, "utf-8")
    }

    getEntitiesCant = async () => {
        let entitiesJs = await fs.promises.readFile(this.entities, "utf-8")
        entitiesJs = JSON.parse(entitiesJs)
        return `Cantidad de transacciones en cuenta: ${entitiesJs.length}`
    }

    deleteEntities = async (identificador) => {
        let entitiesJs = await fs.promises.readFile(this.entities, "utf-8")
        entitiesJs = JSON.parse(entitiesJs)
        const index = entitiesJs.findIndex((entity) => entity.id == identificador)
        if (index == -1) throw Error("El id del elemento no existe.")
        entitiesJs.splice(index, 1)
        await fs.promises.writeFile(this.entities, JSON.stringify(entitiesJs, null, 2))
        return "La transaccion fue eliminada exitosamente"
    }
}

export default EntitiesFsModel

