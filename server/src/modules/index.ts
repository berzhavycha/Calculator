import {calculationRestMethods} from './calculation'
import operations from './operations'


export default {
    get: [
        ...operations.get
    ],
    post: [
        ...calculationRestMethods.post
    ]
}

export * from './calculation'