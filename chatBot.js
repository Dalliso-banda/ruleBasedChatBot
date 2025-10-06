//my first nlp lib 
import nlp from 'compromise'
import greetForms from './regulerExpreesions/regulerGreetings.js'
import regulerBusinessExpresions from './regulerExpreesions/regulerBusinessForms.js';

console.log(greetForms)
class FrendosDrop{
    constructor(userInput){
        this.msg=nlp(userInput);
     

      
        if(this.isGreet(this.msg)){
         let  client = this.msg.people();
          console.log(client)
         return console.log('how are you welcome to our store?')
        }





        if(this.isBS(this.msg)){
            console.log('you can send text 032 for prise')
        }
        else{
            console.error('sorry can you try to be more specific')
        }



    }
    isGreet(greeting){
      let greetStatus= greetForms.some((word)=> greeting.match(word).found)
     
      return greetStatus

        }

    isBS(businessTerm){
        let isBSLogic = regulerBusinessExpresions.some((terms)=>businessTerm.match(terms).found)

        return isBSLogic
           
    }
    
}




export default FrendosDrop