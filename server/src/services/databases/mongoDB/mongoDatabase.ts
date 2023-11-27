import mongoose from 'mongoose';
import { Request, Response, Express } from "express";
import { IDatabase } from "@database";
import { Calculation } from "@models";
import { calculatorModel } from "@calculator";
import config from '@config'

export class MongoDatabase implements IDatabase {

    public connect(app: Express, url: string) {
        const PORT = process.env.PORT || 5001;

        mongoose.connect(url)
            .then(() => {
                console.log('Connected to MongoDB')
                app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
            })
            .catch(error => console.log(error))
    }

    public async postCalculation(req: Request, res: Response) {
        try {
            const { expression } = req.body;

            let result;
            const cachedCalculation = await Calculation.findOne({ expression });

            if (cachedCalculation) {
                result = cachedCalculation.result;
                res.setHeader('Content-Type', 'application/json').status(200).json({ result });
            } else {
                result = calculatorModel.evaluate(expression);
                const newCalculation = new Calculation({ expression, result });
                await newCalculation.save();
                res.setHeader('Content-Type', 'application/json').status(200).json({ result: newCalculation.result });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    }
}