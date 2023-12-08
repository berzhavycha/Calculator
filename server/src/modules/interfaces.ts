import { Request, Response } from "express";

export type Method = {
    route: string;
    controller: (req: Request, res: Response) => Promise<void>;
};

export type RestMethods = {
    get: Method[];
    post: Method[];
};

export type Module = {
    endpoints: RestMethods
}