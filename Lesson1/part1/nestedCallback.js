const num = document.querySelector("#num")
const changeNum = document.querySelector("#changeNum")

function func1(init, callback){
    init += 5;
    callback(init);
} 
function func2(init, callback){
    init *= -5;
    callback(init);
}

function func3(init, callback){
    init /= 2;
    callback(init)
}
function func4(init, callback){
    init %= 57; 
    callback(init);
}


changeNum.addEventListener("click", ()=> {

    func1(num.value, (res1)=>{
        func2(res1, (res2) => {
            func3(res2, (res3)=>{
                func4(res3, (res4)=>{
                    document.getElementById("ansdiv").innerHTML = '<h1>Ans: ' + res4 +'</h1>';
                });
            })

        });
    });
});

/*
*This is a bad example 
*
*/
/*It is inutuitve to see why would want to do it with named functions
*For instance I actually had to think how to not messup the nested callbacks without 
*/
/*
*
*const num = document.querySelector("#num");
const changeNum = document.querySelector("#changeNum");

changeNum.addEventListener("click", () => {
    let initialValue = parseFloat(num.value) || 0;

    (function(init) {
        init += 5;
        (function(init) {
            init *= -5;
            (function(init) {
                init /= 2;
                (function(init) {
                    init %= 57;
                    document.getElementById("ansdiv").innerHTML = '<h1>Ans: ' + init + '</h1>';
                })(init); // func4 equivalent
            })(init); // func3 equivalent
        })(init); // func2 equivalent
    })(initialValue); // func1 equivalent
});
*
*/

