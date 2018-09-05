// Code your solution in this file!
// HQ is 42nd
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance >= 42 ){
        blocks = distance - 42;
    } else {
        blocks = distance + 42;
    }
    return blocks;
}
