// Code your solution in this file!
// HQ is 42nd
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance >= 42 ){
        blocks = distance - 42;
    } else {
        blocks = 42 - distance;
    }
    return blocks;
}

function distanceFromHqInFeet(blockNumber){
    let distanceInFeet;
    distanceInFeet = distanceFromHqInBlocks(blockNumber) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, end){
    let distanceTravelled;
    if (end > start){
        distanceTravelled = (end - start) * 264;
    } else {
        distanceTravelled = (start - end) * 264;
    }
     return distanceTravelled
}

function calculatesFarePrice(start, destination){
    let price;
    let distanceTraveled = distanceTravelledInFeet(start, destination);
     if (distanceTraveled <= 2000 && distanceTraveled >= 400){
         price = distanceTraveled * 2;
     } else if (distanceTraveled > 2000){
         price = distanceTraveled * 25;
     }
     return price;
}
