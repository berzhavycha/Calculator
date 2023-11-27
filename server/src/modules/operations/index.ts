import { getOperationsController } from "./getOperationsController"

export default {
    get: [
        { route: '/operations', controller: getOperationsController }
    ]
}