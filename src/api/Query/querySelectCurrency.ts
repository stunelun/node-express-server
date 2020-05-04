import { getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";

const querySelectCurrency = () => {
    return (
        getRepository(KorbitData).query(
            `SELECT DISTINCT currencypair from Korbit_Data ORDER BY currencypair ASC`
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