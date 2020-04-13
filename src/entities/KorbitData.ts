import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KorbitData {
    korbitInstance: KorbitData;

    @PrimaryGeneratedColumn({type: "int"})
    seq: number;

    @Column({type: "varchar"})
    currencyPair: string;
    
    @Column({type: "double"})
    timestamp: number;
    
    @Column({type: "double"})
    last: number;

    /**
     *  Want to make KorbitData in Singleton.
     *  Setting static instance Object.
     */
    private static instance: KorbitData;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    // private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): KorbitData {
        if (!KorbitData.instance) {
            KorbitData.instance = new KorbitData();
        }
        return KorbitData.instance;
    }

    /**
     * set KorbitData parameters of Korbit's API data to use Mysql Options.
     * @param currencyPair : btc_krw, xrp_krw, etc...
     * @param timestamp : updated data time.
     * @param last  : last updated data
     */
    public setter (currencyPair: string, timestamp: number, last: number) {
        this.currencyPair = currencyPair;
        this.timestamp = timestamp;
        this.last = last;
    };
}
