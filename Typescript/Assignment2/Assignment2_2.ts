function Summation(...iNo : number[]): number
{
    var isum :number =0
    var iCnt :number =0

    for(iCnt=0;iCnt<iNo.length;iCnt++)
    {
        isum=isum+iNo[iCnt]
    }
    return isum
}


var iRet : number =0
iRet=Summation(1,2,3,4,5)
console.log("Addition is: "+iRet)