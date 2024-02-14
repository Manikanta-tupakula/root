var names: string[] = ["Banana","Grapes","Apple","mango","kiwi"];
var prices: number[] = [100,200,150,56,89];

function display(){
for(let i=0;i<names.length;i++){
    console.log(names[i]+" "+prices[i]);
}
}
function findAvg(prices:number[]){
let sum=0,avg=0;
for(let i=0;i<prices.length;i++){
sum=sum+prices[i];
}
avg=sum/prices.length;
console.log("Average Price: "+avg);
}
display();
findAvg(prices)