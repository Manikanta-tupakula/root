var names = ["Banana", "Grapes", "Apple", "mango", "kiwi"];
var prices = [100, 200, 150, 56, 89];
function display() {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i] + " " + prices[i]);
    }
}
function findAvg(prices) {
    var sum = 0, avg = 0;
    for (var i = 0; i < prices.length; i++) {
        sum = sum + prices[i];
    }
    avg = sum / prices.length;
    console.log("Average Price: " + avg);
}
display();
findAvg(prices);
