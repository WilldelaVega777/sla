//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { AbstractSensor }       from '../../base/AbstractSensor'
import { ILog }                 from '../../interfaces/ILog'
import { Operations }           from '../helpers/Operations'

//-------------------------------------------------------------------------
// Class Section
//-------------------------------------------------------------------------
export class CODetector extends AbstractSensor
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
        const result = this._operations.isWithinTolerance(
              this._reference,
              this._operations.mean(this._logData.entries.map(entry => entry.value)),
              3
         )
        return (result ? 'keep' : 'discard')
    }
}
