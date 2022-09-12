const fileSystem = require('fs');
const Validator = require('Validator');
const chalk =require('chalk');
const error = chalk.bold.red;
const valInfo = chalk.bold.green;
//read from file
fileSystem.readFile("./student1.json", (err, data) => {
  
    if(err) {
        console.log("File can't be read", err)
        return
      }
      try{
        const student = JSON.parse(data);
      console.log("Student information:", student); 

    if((student.name)==""){
      console.log (error('Name is required')) 
       }

       const stEmail=student.email;
      if (!Validator.isEmail(stEmail)){
      console.log(error('Incorrect email'));
      }
      
      const stId=student.id;
      if(stId.length !== 9){
        console.log(error('Incorrect id'));
      }

    else{

    if((student.paid) =="yes"){
        console.log(valInfo('Student paied'));
        //write on file
        fileSystem.writeFile('./regSt.json', student.name, err => {
          if (err) {
              console.log('Error writing file', err)
          } 
      })
      }

        else{console.log("Student didn't pay");}
      }
    }
      catch(err) {
        console.log("Error parsing JSON string:", err)
      }
     })

      


