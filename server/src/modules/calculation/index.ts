import { databaseModel } from "@database"


export default {
    post: [
        { route: '/calculations', controller: databaseModel.postCalculation }
    ]
}