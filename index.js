// Code your solution in this file!
// HQ is 42nd
function distanceFromHqInBlocks(distance){
    let blocks;
    if (distance < 42 ){
        let blocks = distance - 42;
    } else {
        let blocks = distance + 42;

    }
    return blocks;
}
