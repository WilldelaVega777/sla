# CMG - Sensor Log Analyzer
Engineering Audition

## 🔥 Technical Desitions
#### OOP
    Having a function to receive and parse the log data into objects and passing them into a specific class for each device, allows for the use of inheritance and polimorphism, which will help in the extensibility of the application when more sensor types are added.

#### Functional?
    Using functional Programming was also an option, but having clear entities to handle the models is something I considered, specially in the case that requirements may change in the future for saving into a database, so having these objects and interfaces would make easier to configure an ORM to handle a code-first approach.

#### Saving Log Timestamps
    I chose also to save Log time information in the temporary objects, although that takes some more milliseconds, but it was also something to consider in the case that requirements would change in the future to allow saving the log data into a historic database that could be used to get statistics of sensor quality over time, as well as for identifying issues in the production of the sensors by finding patterns in their reading failures depending on the time between each reading.

## Tests
----
    Basic tests have been provided, just run yarn test to run battery tests. Jest was used to create unit tests.

## Run/Build
----
    The project was creeated and compiled using node 14.18.1, there will be versions of node that it will not run with, I recommend using nvm to temporarily switch between node versions. To run in dev mode just type: 
    
    yarn run start:dev

    When ready for building, just remove lines 78 and 4 from src/index.ts in order for it not to load test data, then type in the console:

    yarn run build

## Possible Improvements
----
    + Remove Timestamp Data: For what I could see, the Date and Time for the log is not being used and only makes the log more lengthy, so perhaps in a future it may be removed or if kept and it is not going to be of any use, probably we can just ignore it.

    + Adding database Support: As Described in the (Functional?) section above, it would be probably a good idea to store historic data for the sensors for statistical and BI purposes in a database.

    + Logs in Abbreviated format, so in case they are very lenghty, it is still easier to load them into memory.

    + Use of more optimized data structures for analysis (like hashtables) -This is just version 1.0- in case that performance is an issue for the analysis, then using recursivity over an optmized data structure and pure functional could be maybe a better option, a performance analysis should be performed for that purpose. 

## Feedback
----
    Please let me know of any feedback, I am always open to improvement and sharing helps me to better understand where things can be done better and help me become a better developer 🤠.
