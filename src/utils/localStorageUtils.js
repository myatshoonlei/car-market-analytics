export const addToHighlighted = (car) => {
  const highlightedCars = JSON.parse(localStorage.getItem("highlightedCars")) || [];

  const carExists = highlightedCars.some(existingCar => existingCar.Cid === car.Cid);

  if (!carExists) {
    highlightedCars.push(car);
    localStorage.setItem("highlightedCars", JSON.stringify(highlightedCars));
  }
};

export const removeFromHighlighted = (carId) => {
  const highlightedCars = JSON.parse(localStorage.getItem("highlightedCars")) || [];

  const updatedCars = highlightedCars.filter(car => car.Cid !== carId);

  localStorage.setItem("highlightedCars", JSON.stringify(updatedCars));
};

  