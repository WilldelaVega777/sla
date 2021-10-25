//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import * as math from 'mathjs';

//-------------------------------------------------------------------------
// Class Section
//-------------------------------------------------------------------------
export class Operations
{
    //---------------------------------------------------------------------
    // Static (Singleton instance) Section
    //---------------------------------------------------------------------
    private static _instance: Operations;
    private _math: math.MathJsStatic;

    //---------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------
    private constructor()
    {
        this._math = math
    }

    //---------------------------------------------------------------------
    // Public Static Section
    //---------------------------------------------------------------------
    public static getInstance(): Operations
    {
        if (!Operations._instance)
        {
            Operations._instance = new Operations()
        }
        return Operations._instance
    }

    //---------------------------------------------------------------------
    // Static Methods Section
    //---------------------------------------------------------------------
    public standardDeviation(values: number[]): number
    {
        return this._math.std(values)
    }

    //---------------------------------------------------------------------
    public mean(arr: number[]): number
    {
        return (
            arr.reduce(
                (a: number, b: number) => a + b, 0
            ) / arr.length
        )
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
