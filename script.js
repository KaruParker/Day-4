// <<Question.No-1>>
// How to compare two JSON have the same properties without order
var obj1 = {"name":"Person 1", "age":5};
var obj2 = {"age":5, "name":"Person 1"};
function compare(a,b){
    var result = true;
    if(Object.keys(a).length === Object.keys(b).length){
        for(key in a){
            if(a[key] === b[key]){
                continue;
            } else{
                result = false;
                break;
            }
        }
    } else{
        result = false;
    }
    console.log(result);
}
compare(obj1, obj2)

// Output
// true
// -------------------------------------------------------------------------------------------------------

// <<Question.No-2>>
// Use the rest countries API URL https://restcountries.eu/rest/v2/all and display all the country flags in the console.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
    for(var i=0; i<result.length; i++){
       console.log(result[i].flag)
// <<Question.No-3>>
// Use the same rest countries and print all countries names, regions, sub-regions and populations.
       console.log("Name :- " + result[i].name.common) 
       console.log("Region :- "+ result[i].region)
       console.log("Subregion :- "+ result[i].subregion)
       console.log("Population :-"+ result[i].population)    
    }
}

// Output
// 🇲🇷  
// Name :- Mauritania
// Region :- Africa
// Subregion :- Western Africa 
// Population :-4649660
// 🇦🇼
// Name :- Aruba
// Region :- Americas
// Subregion :- Caribbean
// Population :-106766                  
// 🇦🇷
// Name :- Argentina
// Region :- Americas
// Subregion :- South America
// Population :-45376763
// ...etc.
// -----------------------------------------------------------------------------------------------------------
