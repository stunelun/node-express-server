import { getRepository } from "typeorm";
import { KorbitData } from "../../entities/KorbitData";

const querySelectCurrency = () => {
    return (
        getRepository(KorbitData).query(
            `SELECT DISTINCT currencypair from currencypairs ORDER BY currencypair ASC`
        )
        .then(res => {
            const currencyArray:string[] = [];
            res.forEach((element: { currencypair: string; }) => {
                currencyArray.push(element.currencypair);
            });
            return currencyArray;
        })
        .catch(error => {
            console.log(`querySelect Error: `, error);
            return error;
        })
    );
};


export default querySelectCurrency;