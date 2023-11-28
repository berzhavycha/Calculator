import { currentDatabase } from '@database';


interface IRest {
    post: { route: string; controller: (req: Request, res: Response) => Promise<void> }[];

}

export const calculationRestMethods = {
    post: [
        { route: '/operations', controller: currentDatabase.postCalculation }
    ]
}

export * from './constants'

export * from './methodOptions'

export * from './polishNotation/PolishNotation'

export * from './regexCalculation/RegexCalculation'

export * from './regex'
