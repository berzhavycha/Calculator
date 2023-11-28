import mongoose from 'mongoose';
import { Calculation } from "@models";
import { calculationProcessor } from '@modules';

interface IDatabase {
    connect(url: string): void,
    postCalculation(expression: string): Promise<number | undefined>
}

export class MongoDatabase implements IDatabase {

    public connect(url: string) {
        return mongoose.connect(url)
            .then(() => {
                console.log('Connected to MongoDB')
            })
            .catch(error => console.log(error))
    }

    public async postCalculation(expression: string): Promise<number | undefined> {
        try {
            let result;
            const cachedCalculation = await Calculation.findOne({ expression });

            if (cachedCalculation) {
                result = cachedCalculation.result;
            } else {
                result = calculationProcessor.evaluate(expression);
                const newCalculation = new Calculation({ expression, result });
                await newCalculation.save();
            }

            return result
        } catch (error) {
            throw error
        }
    }
}