//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { testData }             from './data/test-data'
import { IReference }           from './models/interfaces/IReference'
import { AbstractSensor }       from './models/base/AbstractSensor'
import { Thermometer }          from './models/classes/sensors/Thermometer'
import { Higrometer }           from './models/classes/sensors/Higrometer'
import { CODetector }           from './models/classes/sensors/CODetector'
import { ILog }                 from './models/interfaces/ILog'
import { ILogEntry }            from './models/interfaces/ILogEntry'

//-------------------------------------------------------------------------
// Solution Section
//-------------------------------------------------------------------------
export const evaluateLogFile = (pLog: string): {} => {

    let reference: IReference =
    {
        temperature: 0,
        humidity: 0,
        co: 0
    }

    let sensors: AbstractSensor[] = []
    let current: ILog
    let retVal: any = {}

    pLog.split('\n').forEach(line => {
        switch(line.split(' ')[0])
        {
            case 'reference':
                reference.temperature = parseFloat(line.split(' ')[1])
                reference.humidity = parseFloat(line.split(' ')[2])
                reference.co = parseFloat(line.split(' ')[3])
                break;
            case 'thermometer':
                current = {
                    deviceType: 'thermometer',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                sensors.push(new Thermometer(current, reference.temperature))
                break;
            case 'humidity':
                current ={
                    deviceType: 'humidity',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                sensors.push(new Higrometer(current, reference.humidity))
                break;
            case 'monoxide':
                current = {
                    deviceType: 'monoxide',
                    deviceId: `${line.split(' ')[1]}`,
                    entries: []
                } as ILog
                sensors.push(new CODetector(current, reference.co))
                break;
            default:
                current?.entries.push({
                    createdAt: new Date(Date.parse(`${line.split(' ')[0]}`)),
                    value: Number(`${line.split(' ')[1]}`)
                } as ILogEntry)
        }
    })

    // Create an Object in the Map Operation
    sensors.forEach(sensor => {
        const propName: string = sensor.getDeviceId()
        retVal[propName] = sensor.evaluate()
    })

    return retVal
}

console.log(evaluateLogFile(testData))
