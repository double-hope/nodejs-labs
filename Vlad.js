function narcissistic(value) {
    let n = Math.floor(Math.log10(value)+1);
    let sum = 0;
    let temp = value;

    for(let i=0; i<n; i++){
        sum += Math.pow(value%10, n);
        value = Math.floor(value/10);
    }

    return sum === temp;
}

function order(words){
    let arr = new Array(words.split(" ").length);
    for(let i=0; i<words.split(" ").length; i++)
        arr[i] = "";

    for(let i of words.split(" "))
    i.split("").map(function (currentValue){
        if(+currentValue)
            arr[+currentValue-1] = i;
    });


    return arr.reduce((a,b) => `${a} ${b}`);
}

// -1 - not finished
// 0 - draw
// 1 - X
// 2 - O


function isSolved(board) {

    let count = [0,0];//count[0] - countX | count[1] - countO

    for(let i of board){
        for(let j of i){
            check(j);
        }
        if(count[0]===3) return 1;
        if(count[1]===3) return 2;
        setZero();
    }


    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            check(board[j][i]);
        }
        if(count[0]===3) return 1;
        if(count[1]===3) return 2;
        setZero();
    }

    for(let i=0; i<board.length;i++){
        check(board[i][i])
        if(count[0]===3) return 1;
        if(count[1]===3) return 2;
    }

    setZero();
    let k=0;

    for(let i=board.length-1; i>=0; i--){
        check(board[k][i])
        if(count[0]===3) return 1;
        if(count[1]===3) return 2;
        k++;
    }

    for(let i of board)
        for(let j of i)
            if(j===0) return -1;

    return 0;


    function setZero(){
        count =[0,0]
    }
    function  check(a){
        if(a===1) count[0]++;
        if(a===2) count[1]++;
    }
}


console.log(narcissistic(153));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(isSolved([[0, 1, 1],
                            [2, 0, 2],
                            [2, 1, 0]]))
