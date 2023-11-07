export interface IReplacer {
    replaceFunction(sanitizedExpression?: string): string
}

export class TrigonometryReplacer implements IReplacer {
    private funcName: string
    
    constructor(func: string) {
        this.funcName = func
    }

    replaceFunction(){
        return `Math.${this.funcName}`
    }
}