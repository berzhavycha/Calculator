import calculation from './calculation/index'
import operations from './operations'

export default {
    get: [
        ...operations.get
    ],
    post: [
        ...calculation.post
    ]
}