let a=[1,2,3,4,5]
// for(let i=0;i<a.length;i++)
//     {
//         console.log(a[i])
//     }
a.forEach((element)=>{
    console.log(element*element)
})

let name="anandita"
let arr= Array.from(name)
console.log(arr)

for(let i of a){
    console.log(i)
}