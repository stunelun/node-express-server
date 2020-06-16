import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KorbitData extends BaseEntity {
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
