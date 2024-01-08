import { Module } from '@modules/interfaces'

export const databaseModule: Module = {
    endpoints: {
        get: [],
        post: []
    }
}

export * from "./constants";
export * from "./databaseOptions";
export * from './options'