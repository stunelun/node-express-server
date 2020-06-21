export const nowTimestamp = () => {
        return new Date().getTime();
};

export const gapTime = (nowTime: number) => {
        /**
         * half_day : 12hours * 60min * 60sec * 1000 milisec
         */
        const termDayTimestamp: number = 12*60*60*1000;
        return nowTime - termDayTimestamp;
}