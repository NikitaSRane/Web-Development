function ChkArmstrong(iNo : number): boolean
{
    var iDigit : number=0
    var No: number=iNo
    var isum : number=0
    var iCube: number=0
    //console.log(No)
    while(iNo != 0)
    {
        iDigit=iNo % 10
        iCube=iDigit*iDigit*iDigit
        isum=isum+iCube
        
        iNo=(iNo /10)|0 // bitwise OR convert float to integer
    }
    //console.log(isum)
    if(isum == No)
    {
        return true
    }
    else
    {
        return false
    }
    
}

var bRet :boolean=false

bRet=ChkArmstrong(153)
if(bRet ==true)
{
    console.log("Armstrong number")
}
else
{
    console.log("Not armstrong number")
}

