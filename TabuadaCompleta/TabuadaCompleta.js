let n1=0
let n2=0

while(n1<=9){
    
    while(n2<=9){
     var resultado = n1*n2
     console.log(n1+"x"+n2+'=' + resultado)
     n2++
    }
    console.log("__________________")
    n2=0
n1++
}