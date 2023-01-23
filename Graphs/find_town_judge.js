// https://leetcode.com/problems/find-the-town-judge/description/

const findJudge = (n, trust) => {
 // Quick response for simple case
    if( 1 == n ){
        return 1;
    }
	// first cell is dummy, just for the convenience of indexing start from 1 to N
    trustScore = Array(n + 1).fill(0);
    for(let i = 0; i< trust.length; i++){
        let p1 = trust[i][0];
        let p2 = trust[i][1];
        // decrease one point from p1 when p1 trusts other people
        trustScore[p1] -= 1 ;
        // increase one point to p2 when p2 is trusted by others
        trustScore[p2] += 1;
    }
    for( let personID = 1 ; personID <= n ; personID++){
        // town judge will be trusted by other N-1 people, and town judge trust nobody.
        if( (n - 1) == trustScore[personID] ){
            return personID;
        }
    }
    return -1;
};
