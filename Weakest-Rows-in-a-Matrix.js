/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
    const answer = [];
    // init answer variable and assing to empty array
    for (let i = 0; i < mat.length; ++i) {
        let current = 0;
        //loop through outter array, initiate current variable assigned to value 0
        //current will be used to store the strength (number of 1s) per row / nested array
        //++i returns the value of i after incrementing (i++ returns value of i before incrementing)
        for (let j = 0; j < mat[i].length; ++j, ++current) { 
            if (mat[i][j] === 0) break;
            //loop through inner array, ++j returns value of j after incrementing
            //++current returns the strength (number of 1s) in the nested array / row after incrementing
            //if outter and inner index === value of 0, break loop
        }
        answer.push([current, i]);
        //push current row strength and outter array index (row number) to answer array
        //each iteration through loop will add another nested array to answer array
        //e.g., [[row0 strength, 0]], [[row0 strength, 0], [row1 strength, 1]], etc...
    }

    console.log(answer);
    console.log(answer.map(item => item[1]));

    return answer
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        //sort answer array to list weakest rows to strongest rows using ternary operation
        .slice(0, k)
        //slice method returns indexes 0 - k of sorted answer array
        .map(item => item[1])
        //map method returns sorted & sliced answer array row numbers / indexes only (2nd item in each array)
};