import { Module } from '@modules/interfaces'

export const logModule: Module = {
    endpoints: {}
}

export * from './constants'
export * from './loggerService'
export * from './appLogger'
export * from './responseLog'