function DisplayFactors(iNo: number) : void
{
    var iCnt : number=0

    for(iCnt=1;iCnt<=iNo/2;iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log(iCnt)
        }
    }

}

DisplayFactors(20)

