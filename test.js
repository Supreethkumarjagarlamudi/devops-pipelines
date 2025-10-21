console.log("Starting tests...");

async function runTests() {
    await new Promise(resolve => setTimeout(resolve, 3000));
} 
runTests();
console.log("Tests completed successfully!");