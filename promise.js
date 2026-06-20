const myPromise=new Promise((resolve,reject)=>{

setTimeout(()=>{

resolve("Task Completed");

},2000);

});


const myPromise=new Promise((resolve,reject)=>{

setTimeout(()=>{

resolve("Success");

},2000);

});


myPromise

.then((result)=>{

console.log(result);

})

.catch((error)=>{

console.log(error);

});