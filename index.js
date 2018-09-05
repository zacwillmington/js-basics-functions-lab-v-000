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
