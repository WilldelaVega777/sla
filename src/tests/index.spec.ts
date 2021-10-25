//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { evaluateLogFile }       from '..'
import { testData }              from '../data/test-data';

//-------------------------------------------------------------------------
// Test Definition Section
//-------------------------------------------------------------------------
it(
    'checks Salutation() returns correctly',
    () => {
        expect(evaluateLogFile(testData)).toEqual({
            'temp-1': 'precise',
            'temp-2': 'ultra precise',
            'hum-1': 'keep',
            'hum-2': 'discard',
            'mon-1': 'keep',
            'mon-2': 'keep'
        })
    }
)
