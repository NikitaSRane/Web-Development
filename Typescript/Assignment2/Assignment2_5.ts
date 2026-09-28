function ChkString(str:string,word:string):boolean
{
    var iCnt : number=0
    var bflag : boolean =false
    //console.log(str.length)
    str=str.trim() // trim white spaces
    //console.log(str.length)
    var arr :string[] =str.split(" ")
    console.log(arr)
    console.log(arr.length)

    for(iCnt=0;iCnt<arr.length;iCnt++)
    {
        
        if(arr[iCnt] == word)
        {
            bflag=true
            break
        }
            
    }

    if(bflag == true)
    {
        return true
    }
    else
    {
        return false
    }
    
}

var bRet:boolean =false
bRet=ChkString(" Pune Kothrud Marvellous Infosystems ","Marvellous")

if(bRet == true)
{
    console.log("Contains word")
}
else
{
    console.log("Does not contain word")
}
