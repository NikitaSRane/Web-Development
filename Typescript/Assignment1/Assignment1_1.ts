function Maximum(iNo1 : number, iNo2 :number , iNo3 :number): number
{
    if(iNo1 > iNo2 && iNo1 > iNo3)
    {
        return iNo1
    }
    else if(iNo2 > iNo1 && iNo2 > iNo3)
    {
        return iNo2
    }
    else
    {
        return iNo3
    }

}

console.log("Maximum number is : "+Maximum(90,809,600))