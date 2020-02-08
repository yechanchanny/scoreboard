const category = {
    a :1,
    b: 2
};

const fruits = ['a', 'b'];


for(let key in category){
    console.log(key);
    console.log(category[key]);
}

for (let key in fruits){
    console.log(key);
}

for (let item of fruits){
    console.log(item);
}