//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { evaluateLogFile }       from '../index'
import { testData }              from '../data/test-data';

//-------------------------------------------------------------------------
// Test Definition Section
//-------------------------------------------------------------------------
it(
    'checks Salutation() returns correctly',
    () => {
        expect(evaluateLogFile(testData).length).toBeGreaterThan(0)
    }
)
