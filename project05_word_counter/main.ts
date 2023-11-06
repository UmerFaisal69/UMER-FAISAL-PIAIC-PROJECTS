import inquirer from "inquirer"


function counter(para:string){
 let freeWhiteSpace = para.replace(/\s/g,"")

   return freeWhiteSpace.length

}

 async function startWordCount(counter:(text:string)=> number){
do{


    let res = await inquirer.prompt({
        type :"input" ,
        message:"write paragraph here ...",
        name:"paragraph",
    })
     console.log(counter(res.paragraph)) 
}
while(true)

}

startWordCount(counter)
