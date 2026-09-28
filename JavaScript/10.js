let vowels=(str)=>{
    let iCount=0;

    for(let iCnt=0; iCnt <= str.length;iCnt++)
    {
        if(str[iCnt] == "a" || str[iCnt] =="e" || str[iCnt] == "o" || str[iCnt] == "i"||str[iCnt]=="u")
        {
            iCount++;
        }
        
    }
    return iCount;
}

let vow=vowels("Nikita");
console.log(vow);
