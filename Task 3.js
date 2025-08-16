const PI = 3.1416;
console.log("Original PI value:", PI);

try {
    
    PI = 3.14;
    console.log("New PI value:", PI);
} catch (error) {
    console.error("Error:", error.message);
}
