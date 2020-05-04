import { Between, getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";
// import testerSelect from "./testerSelect";
import gapHourTime from '../tools/gapHourTime';
import nowTimestamp from '../tools/nowTimestamp';

const querySelect = (getCurrencyPair: string, seqNum1: number, seqNum2: number) => {
    return (
        getRepository(KorbitData).find({
            where: [
                {
                    currencyPair: getCurrencyPair,
                    timestamp: Between(gapHourTime(),nowTimestamp())
                }
            ],
            order: {
                timestamp: 'ASC'
            },
            take: 1
        })
        .then(res => {
            // testerSelect(res);
            return res;
        })
        .catch(error => {
            console.log(`querySelect Error: `, error);
            return error;
        })
    );
};

export default querySelect;