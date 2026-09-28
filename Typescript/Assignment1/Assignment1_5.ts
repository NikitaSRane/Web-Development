function Fibonacci(iNo : number): void
{
    var iNo1: number=0
    var iNo2: number=1

    var iCnt : number =0
    var iSum : number =0

    for(iCnt=0;iCnt<=iNo;iCnt++)
    {
        iSum=iNo1+iNo2
        console.log(iSum)
        iNo1=iNo2
        iNo2=iSum

        if(iSum == iNo)
        {
            break
        }
    }
}

Fibonacci(21)