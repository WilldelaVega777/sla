//-------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------
import { boolean } from 'node_modules/mathjs/types'
import { Operations }       from '../classes/helpers/Operations'

//-------------------------------------------------------------------------
// Environment Section
//-------------------------------------------------------------------------
const operations = Operations.getInstance()

//-------------------------------------------------------------------------
// Test Definition Section
//-------------------------------------------------------------------------
it(
    'checks standardDeviation',
    () => {
        expect(operations.standardDeviation(
            [2, 4, 6, 8]
        )).toEqual(2.581988897471611)
    }
)
//-------------------------------------------------------------------------
it(
    'checks mean',
    () => {
        expect(operations.mean(
            [2, 4, 6, 8]
        )).toEqual(5)
    }
)
//-------------------------------------------------------------------------
it(
    'checks isWithinTolerance',
    () => {
        expect(operations.isWithinTolerance(
            70,69.5,.5
        )).toBeTruthy()
    }
)
//-------------------------------------------------------------------------
it(
    'checks *not* isWithinTolerance',
    () => {
        expect(operations.isWithinTolerance(
            70,71,.5
        )).toBeFalsy()
    }
)
