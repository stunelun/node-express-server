import { getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";

const querySelectCurrency = () => {
    return (
        getRepository(KorbitData).query(
            `select DISTINCT currencypair from korbit_data`
        )
        .then(res => {
            const currencyArray:string[] = [];
            res.forEach(element => {
                currencyArray.push(element.currencypair);
            });
            // console.log(currencyArray);
            return currencyArray;
        })
        .catch(error => {
            console.log(`querySelect Error: `, error);
            return error;
        })
    );
};


export default querySelectCurrency;