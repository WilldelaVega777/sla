//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { testData }             from './data/test-data'
import { ILog }                 from './models/interfaces/ILog'
import { ILogEntry }            from './models/interfaces/ILogEntry'

//-------------------------------------------------------------------------
// Solution Section
//-------------------------------------------------------------------------
export const evaluateLogFile = (pLog: string): ILog[] => {

    let retVal: ILog[] = []
    let current: ILog

    pLog.split('\n').forEach(line => {
        switch(line.split(' ')[0])
        {
            case 'thermometer':
                current = {
                    deviceType: 'thermometer',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                retVal.push(current)
                break;
            case 'humidity':
                current ={
                    deviceType: 'humidity',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                retVal.push(current)
                break;
            case 'monoxide':
                current = {
                    deviceType: 'monoxide',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                retVal.push(current)
                break;
            default:
                current?.entries.push({
                    createdAt: new Date(Date.parse(`${line.split(' ')[0]}`)),
                    value: Number(`${line.split(' ')[1]}`)
                } as ILogEntry)
        }
    })

    retVal.map(log =>{
         [log.deviceId] :
    })

    return retVal;
}

console.log(evaluateLogFile(testData))

