// //find out the names of the coffeeshops that are 1 miles away from MIT

var coffeeList=[];
var loaddata=function(){


    coffee.businesses.forEach(function(item)
    {
        var coffeeInfo={};
        coffeeInfo.name=item["name"];
        // console.log("\n  coffeeInfo.name= "+ coffeeInfo.name);
        
        coffeeInfo.lat=item["coordinates"]["latitude"];
        // console.log("\n     coffeeInfo.lat = "+coffeeInfo.lat);
        coffeeInfo.lng=item["coordinates"]["longitude"];
        coffeeList.push(coffeeInfo);
    }
    );
    
    // console.log("coffelist "+coffeeList);

};






