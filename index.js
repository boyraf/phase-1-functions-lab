function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    fare = 25;
  } else if (distance > 400) {
    fare = (distance - 400) * 0.02;
  }

  return fare;
}
