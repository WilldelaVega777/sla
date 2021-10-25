//-------------------------------------------------------------------------
// Class Section
//-------------------------------------------------------------------------
export class Operations
{
    //-------------------------------------------------------------------------
    // Static (Singleton instance) Section
    //-------------------------------------------------------------------------
    private static _instance: Operations;

    //-------------------------------------------------------------------------
    // Public Static Section
    //-------------------------------------------------------------------------
    public static getInstance(): Operations
    {
        if (!Operations._instance)
        {
            Operations._instance = new Operations()
        }
        return Operations._instance
    }

    //-------------------------------------------------------------------------
    // Static Methods Section
    //-------------------------------------------------------------------------
    public standardDeviation(values: number[]): number
    {
        let avg = this.mean(values)

        let squareDiffs = values.map(value => {
            let diff = value - avg
            return (diff * diff)
         })

        let avgSquareDiff = this.mean(squareDiffs)
        return Math.sqrt(avgSquareDiff)
    }

    //---------------------------------------------------------------------
    public mean(arr: number[]): number
    {
        return (arr.reduce((a: number, b: number) => a + b, 0) / arr.length)
    }
    //---------------------------------------------------------------------
    public isWithinTolerance(
        reference: number,
        value: number,
        tolerance: number): boolean
    {
        return (Math.abs(reference - value) <= tolerance)
    }
}
