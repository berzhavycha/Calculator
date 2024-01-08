import { Module } from '@modules/interfaces'

export const logModule: Module = {
    endpoints: {
        get: [],
        post: []
    }
}

export * from './constants'
export * from './loggerService'
export * from './appLogger'
export * from './responseLog'