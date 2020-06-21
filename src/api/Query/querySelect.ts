import { Between, getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";
// import testerSelect from "./testerSelect";
import {gapTime, nowTimestamp} from '../tools/timestampTools';

const querySelect = (getCurrencyPair: string, seqNum1: number, seqNum2: number) => {
    const nowTime = nowTimestamp();
    return (
        getRepository(KorbitData).find({
            where: [
                {
                    currencyPair: getCurrencyPair,
                    timestamp: Between(gapTime(nowTime),nowTime)
                }
            ],
            order: {
                timestamp: 'ASC'
            },
            take: 1
        })
        .then(res => {
            /* result Test tool */
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