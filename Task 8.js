    let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
    let filteredNumbers = [];

    for (let num of numbers) {
        if (num % 2 === 0 && num > 20) {
            filteredNumbers.push(num);
        }
    }

    console.log(`Found ${filteredNumbers.length} numbers: [${filteredNumbers}]`);
