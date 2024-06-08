//IIFE  immedicately invoke function expression 
//AKA - anonymous self-executing function
(function()
{
    //named function
    function Start()
    {
        console.log("App started....!");
        for (var index =0; index <10; index++)
            {
                console.log(index);
                }        
                console.log();
        }
    
    window.addEventListener("load",Start);
})();


//function Start () --local function call start return void
//let Start = function(){} use "let" key word let start to point the function
//let Start =() =>{}
// var 