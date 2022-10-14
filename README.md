# LowAssosciates - code flow explaination

-	To track the employee wages - First thing I went through the problem statement and I took the input file from the textfile - " EmpTestFile.txt". and simply printed on my console using fs.readFile inbuild function.

Based on the test EmptestFile - there were multiple lines - so I simply split for each line so that its easily readable and also allows me to loop into "employeeArr" - now according to the problem statement I decided to take the first keyword that is Employee - because I was able to split the lines and texts I was able to easily loop through each of the lines and do operations accordingly to the keywords for "Employee", "Pay" and "Time".

Now based on the keywords present in test files and problem statements - I have decided to use  4 functions "createEmployee", "addpayForEmployee", "updateTime" and I started calling all the functions based on keywords inside my readFile function.
# each functions description 

"createEmployee" function - I am just adding the name and pushing inside the employeeArr

"addPayForEmployee" function - I am appending the pay to the created employees

"updateTime" function - I am appenfing the pay and time - I have also added a logic to calculate the salary at that point of time - based on the hours hes working - so I am calculating and putting in the structure

   NOTE : I made sure for each function there will be a JSON elements so that JSON element will build at my final complete structure

"earnedSalary" function - I am adding everything into a proper fully formed structure for each employee


# how to run the code

Unzip the file and open the file in any IDE and in terminal run "npm i"
Install node modules using 

  npm i

Once after all the node modules are built, we need to simply run "node index.js" to see the output
  
  node index.js

# unit testing

I havent designed my code to write unit testing easily - I had to modify the design of my code - I am simply uploading all the datas to JSON - I had to create a database table created using SQLLite or some other Database and insert and update it. 

So now I have done it using JSON

As I had to make significant changes on design approach - I thought I will write my unit testing approach which might help you decide about my idea on testing

# references used 

used moment keyword from - https://momentjs.com/docs/
