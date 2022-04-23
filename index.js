// Code your solution in this file!

function distanceFromHqInBlocks(num, num2 = 42) {
    console.log(num2)
    let diff = Math.abs(num2 - num)
    return diff
}




function distanceFromHqInFeet(blocks) {
    const blockPerFeet = 264
    return distanceFromHqInBlocks(blocks) * blockPerFeet;
}



function distanceTravelledInFeet(num1, num2) {

    const diff = distanceFromHqInBlocks(num1, num2);
    console.log(diff)
    return diff * 264;


}


function calculatesFarePrice(start, destination) {

    const totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance > 2500) {
        return 'cannot travel that far';
    }
    else if (totalDistance < 400) {
        return 0;
    }
    else if (totalDistance < 2000 && totalDistance > 400) {
        return 0.02 * (totalDistance - 400);
    }
    else if (totalDistance < 2500 && totalDistance > 2000) {
        return 25;
    }

}

distanceTravelledInFeet(42, 50);
