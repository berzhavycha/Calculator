import { databaseServices } from "@services/databases/databaseOptions";
import { Request, Response, Express } from "express";
import config from '@config'

export interface IDatabase {
    postCalculation(req: Request, res: Response): void
    connect(app: Express, url: string): void
}

export class DatabaseModel implements IDatabase {
    private database: IDatabase

    constructor(currentDatabase: IDatabase) {
        this.database = currentDatabase;
        this.postCalculation = this.postCalculation.bind(this);
        this.connect = this.connect.bind(this);
    }

    public async postCalculation(req: Request, res: Response) {
        this.database.postCalculation(req, res);
    }

    public connect(app: Express, url: string): void {
        this.database.connect(app, url)
    }

}

export const databaseModel = new DatabaseModel(databaseServices[config.database]);
