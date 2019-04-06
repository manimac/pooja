function save(){
    alert(document.getElementById('username').value);
    document.getElementById('content').innerHTML = 'Hai this from script side...';
}

var testObj = {
    name : 'Dinesh',
    age : 27
}

var testarr = [
    {
        name :'Karthick',
        age : 26
    },
    {
        name :'Vignesh',
        age : 28
    },
    {
        name :'Aravind',
        age : 25
    },
    {
        name :'Jagan',
        age : 21
    }
]

// testarr.push(testObj); //Add object in last position
// testarr.unshift(testObj); // Add object in first position
// testarr.splice(2,0,testObj); // Add object in specified position
// testarr.pop(); // Delete object in last position
// testarr.shift(); // Delete object in first position

// delete testarr[2];


console.log(testarr);


for(var i =0 ;i < testarr.length;i++){
    if(testarr[i].name == 'Aravind'){
        console.log(testarr[i].age)
    }
    else if(testarr[i].name == 'Jagan'){
        console.log(testarr[i].age)
    }
    else{
        console.log(testarr[i].name)
    }
}


var testStr = 'Hai-this-is-Mani';

var testsplit = testStr.split("-");
testsplit = testsplit.join(" ");
console.log(testsplit)
console.log(testStr);


var name1 = 'Mani';
var name2 = "Raja";


var name3 = name1 + " " + name2;

console.log(name3);