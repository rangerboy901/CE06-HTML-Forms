/*
Joseph DeWeese
18 July 2022
E06: HTML Forms
 */


document.querySelector("#calcGallons").addEventListener("click",
    function (e) {


        //JWD:  VALIDATION

        if (document.querySelector("#numOfGall").reportValidity()
        )
        {
document.querySelector("#numOfGall").value;

            //JWD: Radio Button
    if(document.querySelector("#pints").checked)

    {
        let  numOfPints = parseInt(numOfGall / 8;
       document.querySelector("#numOfGall").value = Math.ceil(numOfGall);
        document.querySelector("#numOfPints").innerHTML = "There are  "+numOfPints+" pints in "+numOfGall+" gallons.";
    }
    else if(document.querySelector("#quarts").checked)
    {
        let numOfQuarts = numOfGall / 4 ;
        document.query("#numOfGall").value = Math.ceil(numOfGall);
        document.querySelector("#numOfQuarts").innerHTML = "There are  "+numOfQuarts+" quarts in "+numOfGall+" gallons.";
    }
    else  if(document.querySelector("#cups").checked)
    {
        let numOfCups = numOfGall / 16;
          document.querySelector("#numOfGall").value = Math.ceil(numOfGall);
        document.querySelector("#numOfCups").innerHTML = "There are  "+numOfCups+" cups in "+numOfGall+" gallons.";
    }

        }
    });