function Maximum(... iNo : number[]): number
{
    var iMax : number =iNo[0]
    var iCnt : number=0

    for(iCnt=1; iCnt<iNo.length; iCnt++)
    {
        if( iMax < iNo[iCnt])
        {
            iMax=iNo[iCnt]
        }
    }
    return iMax
}

console.log("Maximum number is : "+Maximum(90,89,6,500))