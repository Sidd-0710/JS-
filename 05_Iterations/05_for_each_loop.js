// for each loop


const language = ["js","ruby","java","python","cpp"]

// language.forEach( function (item){
//     console.log(item);
    
// })

// language.forEach((item)=> {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// language.forEach(printMe)

// language.forEach((item, index, arr )=> {
//     console.log(item,index,arr);
    
// })


const myCoding =[ 
    {
        languageName:"javascript", 
        languageFile:"js"
    },
    {
        languageName:"c programming", 
        languageFile:"c++"
    },
    {
        languageName:"python", 
        languageFile:"py"
    },
    
]

myCoding.forEach((item )=>{
    console.log(item.languageName);
})