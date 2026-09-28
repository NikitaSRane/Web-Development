function CircleArea(Rad : number,Pi?: number) : number
{
    var area: number=0

    if(Pi == undefined)
    {
        Pi = 3.14
    }

    area= Pi *Rad*Rad
    return area

}

console.log(CircleArea(5.10, 3.14))
console.log(CircleArea(5.10))