//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { ILog }             from '../interfaces/ILog'
import { ILogEntry }        from '../interfaces/ILogEntry'
import { IResult }          from '../interfaces/IResult'

//-------------------------------------------------------------------------
// Class Section
//-------------------------------------------------------------------------
export abstract class AbstractSensor
{
    //---------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------
    private _log: ILog;

    //---------------------------------------------------------------------
    // Constructor Section
    //---------------------------------------------------------------------
    constructor(pLog: ILog) {
        this._log = pLog
    }

    //---------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------
    public getResult(): IResult {
        return {
            deviceId: this._log.deviceId,
            result: this.getResultValue()
        }
    }

    //---------------------------------------------------------------------
    // Protected Methods Section
    //---------------------------------------------------------------------
    protected getResultValue(): string
    {
        let result: string = 'keep'
        return result
    }
}
