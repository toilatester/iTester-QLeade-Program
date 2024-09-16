const fs = require('fs');


class City {
    constructor(country, city, lat, long) {
        this.country = country;
        this.city = city;
        this.geo = {
            lat: lat,
            long: long
        };
    }
    checkNear(city){
        if ((this.geo.lat-city.geo.lat<=10)||(this.geo.long-city.geo.long)<=10) return true 
        else return false
    }
}

class CityList {
    constructor(){
        this.cityList=[]
    }
    addCity(city) {
        this.cityList[this.cityList.length]=city
    }  
}

function findNearAndAddToList(arr,pool){
    var j=0
    var i=0
    if (arr.length==0) {arr.push(pool.shift())}
    while (pool.length!=0||(j<pool.length)||(i>=arr.leng))
    {   
        // console.log(pool.length)

        // console.log(arr[i])
        // console.log(pool[j])
        if (arr[i].checkNear(pool[j])==true) 
        {   
            arr.push(pool[j])
            pool.splice(j,1)
        }
        else {j=j+1}
        if (j>=pool.length) {i=i+1;j=0}
        // console.log(pool.length)
    }
}


const filePath = '../../countries_with_cities.json'

fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const jsonData=JSON.parse(data);

    const raw=jsonData.map(data=>new City(data.country,data.city,data.geo.lat,data.geo.long))
    // console.log(raw[0])

    var cityList=new CityList();
    raw.forEach(city=>{
        cityList.addCity(city)
    })
    // console.log(cityList)
    var pool=cityList
    var listOfNearCity=[[]]
    var countList=0
    while (pool.cityList.length!=0) {
        
        findNearAndAddToList(listOfNearCity[countList],pool.cityList)
        countList=countList+1
    }
    for (let i=0;i<countList;i++){
        console.log("List "+(i+1) +" of near city:")
        console.log(listOfNearCity[i])
    }
})



