
//restaurants=resHours
var distance= function(a,b,restaurants)
{
    restaurants.forEach(function(item)
    {
        var c=item.lat;
        var d=item.lng;
        var dx= a-c;
        var dy= b-d;
        var dis= Math.sqrt(dx*dx+dy*dy);
        item.distance=dis;
    }); 
    restaurants.sort(function(item1,item2){
        return item1.distance-item2.distance;
    });
    return restaurants.slice(0,20);
};

var result=distance(1,2,[{"lat":3,"lng":4},{"lat":5,"lng":6}]);
console.log(result);