import { KorbitData } from 'entities/KorbitData';

/**
 * Test Code : SelectQuery
 */
const tester = (testObj: KorbitData[]) => {
    testObj.forEach(element => {
        console.log(`
            **********************
            Seq : ${element.seq}, 
            CurrencyPair : ${element.currencyPair}, 
            TimeStamp : ${element.timestamp}, 
            Last : ${element.last}
            #######################
        `);
    });
};

export default tester;