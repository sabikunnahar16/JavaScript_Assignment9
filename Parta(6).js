function getData(){

return new Promise((resolve)=>{

setTimeout(()=>{

resolve("Data Loaded");

},2000);

});

}


async function loadData(){

const data=await getData();

console.log(data);

}

loadData();