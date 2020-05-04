const gapHourTime = () => {
    /**
     * 1Hour : 60sec * 60min * 1000 milisec
     */
    const termHourTimestamp: number = 60*60*1000;
    return new Date().getTime() - termHourTimestamp;
}

export default gapHourTime;