function distanceFromHqInBlocks(distance) {
    let hq = 42;
    if (distance > hq) {
        return distance - hq;
    } else if (distance < hq) {
        return hq - distance;
    }
}

function distanceFromHqInFeet(distance) {
    let d = distanceFromHqInBlocks(distance);
    return d * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if (start < destination) { 
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }
    if (feet <= 2000) {
        let price = (feet - 400) * .02; 
        return price;   
    } else if (feet > 2000 && feet < 2500) {
        return 25.00;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }
}