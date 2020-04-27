import { Between, getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";
// import testerSelect from "./testerSelect";

const querySelect = (getCurrencyPair: string, seqNum1: number, seqNum2: number) => {
    // if(seqNum){}else{};
    return (
        getRepository(KorbitData).find({
            where: [
                {
                    currencyPair: getCurrencyPair,
                    seq: Between(seqNum1,seqNum2)
                }
                // {timestamp: Between(timestamp1, timestamp2)}
            ]
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