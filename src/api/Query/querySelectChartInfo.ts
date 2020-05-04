import { Between, getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";
// import testerSelect from "./testerSelect";
import gapHourTime from '../tools/gapHourTime';
import nowTimestamp from '../tools/nowTimestamp';

const querySelectChartInfo = (getCurrencyPair: string) => {
    return (
        getRepository(KorbitData).find({
            where: [
                {
                    currencyPair: getCurrencyPair,
                    timestamp: Between(gapHourTime(),nowTimestamp())
                }
            ]
            // ,
            // order: {
            //     timestamp: 'ASC'
            // },
            // take: 1
        })
        .then(res => {
            // testerSelect(res);
            return res;
        })
        .catch(error => {
            console.log(`queryStart Error: `, error);
            return error;
        })
    );
};

export default querySelectChartInfo;