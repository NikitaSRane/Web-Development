function Maximum(...iNo :number[]):number
{
    var iCnt : number=0
    var iMax: number=iNo[0]
    var iSecMax : number=iNo[0]

    for(iCnt=0;iCnt<iNo.length;iCnt++)
    {
        if(iNo[iCnt] > iMax)
        {
            iSecMax=iMax
            iMax=iNo[iCnt]
        }
       else if(iNo[iCnt] > iSecMax && iNo[iCnt] < iMax)
       {
            iSecMax=iNo[iCnt]
       }

    }
    return iSecMax
}

console.log("Second maximum number is: "+Maximum(90,89,6,500)
)