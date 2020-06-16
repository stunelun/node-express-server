import { Between, getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";
// import testerSelect from "./testerSelect";
import gapDayTime from '../tools/gapDayTime';
import nowTimestamp from '../tools/nowTimestamp';

const querySelectChartInfo = (getCurrencyPair: string) => {
    return (
        getRepository(KorbitData).find({
            where: [
                {
                    currencyPair: getCurrencyPair,
                    timestamp: Between(gapDayTime(),nowTimestamp())
                }
            ],
            /* Necessary some case, using optione 'order' and 'take' */
            // order: {
            //     timestamp: 'ASC'
            // },
            // take: 1
        })
        .then(res => {
            /* result Test tool */
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