// https://leetcode.com/problems/insert-interval/

const insert = (intervals, newInterval) => {
	let res=[]

	for(let i = 0; i < intervals.length; i++){

		// if new interval end is before the current element without overlapping
    		// we simply add it to the beginning of the intervals list
		if(newInterval[1] < intervals[i][0]){
			res.push(newInterval)
            // merge [newInterval] and [intervals]
            // => [[newInterval], [intervals]]
			return res.concat(intervals.slice(i))
		}

		// if new interval is after the current element without overlapping
    		// res = [] =>    res = [[intervals[i],...]
		else if(newInterval[0] > intervals[i][1]){
			res.push(intervals[i])
		}

		// otherwise, newInterval is merged with the interval we're currently at
		else{
			newInterval=[Math.min(newInterval[0],intervals[i][0]), Math.max(newInterval[1],intervals[i][1])]
		}

	}
	// if we are out of the loop then it means that we have scanned through all the intervals and 
	// have our newInterval updated/merged but we haven't placed it into the original intervals list
  	// this means that the end of the newly merged interval is larger than any interval in the original intervals list

	res.push(newInterval)
	return res
};
