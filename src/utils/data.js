import carDataJson from '../data/taladrod-cars.min.json';
import brandIcons from './brandIcon'; // Ensure this path is correct

const groupCarsByMkID = (carData) => {
    const groupedCars = {};

    // Group cars by their MkID (Brand ID)
    carData.Cars.forEach((car) => {
        const brandId = car.MkID;

        if (!groupedCars[brandId]) {
            groupedCars[brandId] = {
                brandName: carData.MMList.find(brand => brand.mkID === brandId)?.Name || 'Unknown Brand',
                icon: brandIcons[brandId] || null, // Add the icon URL here
                cars: []
            };
        }
        groupedCars[brandId].cars.push(car);
    });

    return groupedCars;
};


const carData = groupCarsByMkID(carDataJson);

console.log(carData)

export { carData };
