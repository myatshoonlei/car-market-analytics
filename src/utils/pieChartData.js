import carDataJson from '../data/taladrod-cars.min.json';

// Function to generate a shade of purple from pale to dark
const getPurpleShade = (index, total) => {
    const baseHue = 270; // Hue for purple
    const lightnessRange = 50; // Range of lightness from pale to dark (0% to 100%)
    const lightness = 95 - (index * (lightnessRange / (total - 1))); // From 100% (pale) to 50% (dark)

    return `hsl(${baseHue}, 70%, ${lightness}%)`;
};

const preparePieChartData = (carData) => {
    const carCounts = {};

    // Count the number of cars under each MkID
    carData.Cars.forEach((car) => {
        const brandId = car.MkID;

        if (!carCounts[brandId]) {
            carCounts[brandId] = 0;
        }
        carCounts[brandId]++;
    });

    // Prepare labels and data for the Pie Chart
    const labels = [];
    const data = [];
    const backgroundColors = [];
    const hoverBackgroundColors = [];

    Object.keys(carCounts).forEach((brandId, index) => {
        const brand = carData.MMList.find(brand => brand.mkID === parseInt(brandId));
        const brandName = brand ? brand.Name : 'Unknown Brand';

        labels.push(brandName);
        data.push(carCounts[brandId]);

        const color = getPurpleShade(index, Object.keys(carCounts).length);
        backgroundColors.push(color);
        hoverBackgroundColors.push(`hsl(270, 80%, ${Math.max(0, 85 - (index * 5))}%)`); // Darker shade on hover
    });

    return {
        labels,
        datasets: [
            {
                label: 'Number of Cars by Brand',
                data,
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
            },
        ],
    };
};

const pieChartData = preparePieChartData(carDataJson);

export { pieChartData };
