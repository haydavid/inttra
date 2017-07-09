Demonstration for INTTRA
========================

This demonstration uses Java, Junit, Selenium and Cucumber to test the 
login functionality of the BBC news site. The basic framework uses page 
objects that could be reused in multiple step definitions. Only one file 
needs to be changed if the UI is modified. Common functionality, like 
taking the screen shots, are added to a class that can be reused. The 
test reports are saved to the target folder and include screenshots of 
each scenario. 

As requested the following scenarios are tested. 
1. Simple scenario to login
2. One scenario outline to login using multiple credentials
3. Give the data table with credentials within scenario itself
4. Read excel (or any data source) which consists of login credentials.
5. Capture screenshots for each scenario.

