import carDataJson from '../data/taladrod-cars.min.json';

// Process the car data to prepare it for a stacked bar chart
const processCarData = (carData) => {
    const brandModelCounts = {};

    // Initialize brand data
    carData.Cars.forEach((car) => {
        const { MkID, Model } = car;

        if (!brandModelCounts[MkID]) {
            brandModelCounts[MkID] = {
                brandName: carData.MMList.find(brand => brand.mkID === MkID)?.Name || 'Unknown Brand',
                models: {}
            };
        }

        if (!brandModelCounts[MkID].models[Model]) {
            brandModelCounts[MkID].models[Model] = 0;
        }

        brandModelCounts[MkID].models[Model]++;
    });

    return brandModelCounts;
};

// Prepare the chart data
const prepareChartData = (brandModelCounts) => {
    const labels = []; // This will store brand names
    const modelsSet = new Set(); // To keep track of all unique models across brands
    const datasets = [];

    // First, collect all unique models and create the labels (brands)
    Object.keys(brandModelCounts).forEach(brandId => {
        const brand = brandModelCounts[brandId];
        const brandName = brand.brandName;

        // Add brand to labels if it's not already added
        if (!labels.includes(brandName)) {
            labels.push(brandName);
        }

        // Add all models to the modelsSet
        Object.keys(brand.models).forEach(modelName => {
            modelsSet.add(modelName);
        });
    });

    // Convert the modelsSet to an array and reverse it to make the last model the darkest
    const modelsArray = Array.from(modelsSet).reverse();

    // Now, create a dataset for each model (from light to dark)
    modelsArray.forEach((modelName, index) => {
        const dataset = {
            label: modelName,
            data: new Array(labels.length).fill(0),
            backgroundColor: getPurpleShade(index, modelsArray.length),
            borderColor: getPurpleShade(index, modelsArray.length),
            borderWidth: 1,
        };

        // Populate the data for each brand
        labels.forEach((brandName, brandIndex) => {
            const brandId = Object.keys(brandModelCounts).find(id => brandModelCounts[id].brandName === brandName);
            const modelCount = brandModelCounts[brandId]?.models[modelName] || 0;
            dataset.data[brandIndex] = modelCount;
        });

        datasets.push(dataset);
    });

    return { labels, datasets };
};

// Function to generate a shade of purple from pale to dark
const getPurpleShade = (index, total) => {
    const baseHue = 270; // Hue for purple
    const lightnessRange = 50; // Range of lightness from pale to dark (50% to 100%)
    const lightness = 95 - (index * (lightnessRange / (total - 1))); // From 95% (pale) to 45% (dark)

    return `hsl(${baseHue}, 70%, ${lightness}%)`;
};

// Generate chart data
const brandModelCounts = processCarData(carDataJson);
const chartData = prepareChartData(brandModelCounts);

export { chartData };
