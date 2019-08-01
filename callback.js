

const doit =()=>{
    setTimeout(() => {
        return{ data : 'I am working inside.'}
    },3000)
}
const todo = doit();
console.log(todo.data);

// when doit function executes, it calls the setTimeout function which has an asynchorinse function.
//and jS sends the setTimeout to Eventlistners and and directly execute the console.log(todo.data) where data is not 
//defined yet , as its still waiting for setTimeout to come again. Inorder to handle issues like this JS need callback 
//functions. 

// Use asynchronous javascript to solve this.
// 1. Function callbacks
// 2. Promises 
// 3. Aysnc Await.

//Prashanth
// Callbacks are simple functions which are used to notify the calling instance when an asynchornous code has been executed and the
// result is available.

//Example 1.

const doit = (callback) => {
    setTimeout(() => {
        callback({
            data : "I am working inside."
    })
},3000)}

doit(todo => {console.log(todo)})

//Example 2.

const doit = (data) => {
    setTimeout(() => {
        const obj = {
            data : "I am working inside."
    };  data(obj);
},1000)}

doit(function(todo){
	console.log(todo.data);
})

// Example 3.


function hello(data){
    setTimeout(function(){
      data( "Happy")
    },1000)
    
    }
    
    hello(function(yes){console.log(yes)})
// Example 4.
function heavy(ok){
    setTimeout(function pala(){
      const obj = { hello : "beta"}
     ok(obj)}, 1000)
  }
  
  heavy(function(ok){console.log(ok.hello)});  

  
  
  