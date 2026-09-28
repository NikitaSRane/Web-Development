function ChkPrime(iNo : number):boolean
{
    var iCnt : number=0
    var iCount : number=0

    for(iCnt=2;iCnt<=iNo/2;iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            iCount++
            break
        }
    }
    if(iCount == 0)
    {
        return true
    }
    else
    {
        return false
    }
}

var bRet : boolean =false
bRet=ChkPrime(1)
if(bRet==true)
{
    console.log("Prime number")
}
else
{
    console.log("Not prime number")
}