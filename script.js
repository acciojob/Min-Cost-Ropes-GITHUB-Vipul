function comparable(a,b)
	{
		if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
	}
function mincost(arr)
{ 
//write your code here
// return the min cost
	let min_cost=0;
	arr.sort(comparable)
	while(arr.length>1)
		{
			let num1=arr.shift();
			let num2=arr.shift();
			let cost=num1+num2;
			min_cost+=cost;
			arr.push(cost);
			arr.sort(comparable);
		}
  return min_cost;
}

module.exports=mincost;
