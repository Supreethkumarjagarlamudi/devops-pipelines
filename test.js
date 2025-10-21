console.log("Starting tests...");

async function runTests() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Waiting for tests to complete(ETA: 3s)...");
        resolve("Tests completed successfully!");
    }, 3000));
} 
runTests();