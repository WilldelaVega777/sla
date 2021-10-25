//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { AbstractSensor }       from '../../base/AbstractSensor'
import { ILog }                 from '../../interfaces/ILog'
import { Operations }           from '../helpers/Operations'

//-------------------------------------------------------------------------
// Class Section
//-------------------------------------------------------------------------
export class Thermometer extends AbstractSensor
{
    //---------------------------------------------------------------------
    // Private Fields Section
    //---------------------------------------------------------------------
    private _logData: ILog
    private _reference: number
    private _operations: Operations

    //---------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------
    constructor(pLog: ILog, pReference: number)
    {
        super(pLog)
        this._logData = pLog
        this._reference = pReference
        this._operations = Operations.getInstance()
    }

    //---------------------------------------------------------------------
    // Public Methods Section
    //---------------------------------------------------------------------
    public evaluate()
    {
        const deviation = this._operations.standardDeviation(
            this._logData.entries.map(entry => entry.value)
         )
        const result = (
            (deviation < 3)
            &&
            this._operations.isWithinTolerance(
                this._reference,
                this._operations.mean(this._logData.entries.map(entry => entry.value)),
                0.5
            )
         )
        return (result ? 'ultra precise' : 'precise')
    }
}
