const gapDayTime = () => {
    /**
     * 1Day : 24hours * 60min * 60sec * 1000 milisec
     */
    const termDayTimestamp: number = 2400*60*60*1000;
    return new Date().getTime() - termDayTimestamp;
}

export default gapDayTime;