// Simple test runner (no external dependencies)
const { add, subtract, multiply, divide } = require('./script.js');

console.log('🧪 Running tests...\n');

let passed = 0;
let failed = 0;

function test(description, actual, expected) {
    if (actual === expected) {
        console.log(`✅ ${description}: PASSED`);
        passed++;
    } else {
        console.log(`❌ ${description}: FAILED`);
        console.log(`   Expected: ${expected}, Got: ${actual}`);
        failed++;
    }
}

// Test addition
test('Add 2 + 3', add(2, 3), 5);
test('Add negative numbers -5 + -3', add(-5, -3), -8);
test('Add zero 10 + 0', add(10, 0), 10);

// Test subtraction
test('Subtract 10 - 5', subtract(10, 5), 5);
test('Subtract negative result 3 - 7', subtract(3, 7), -4);
test('Subtract zero 15 - 0', subtract(15, 0), 15);

// Test multiplication
test('Multiply 4 * 5', multiply(4, 5), 20);
test('Multiply by zero 7 * 0', multiply(7, 0), 0);
test('Multiply negative -3 * 4', multiply(-3, 4), -12);

// Test division
test('Divide 15 / 3', divide(15, 3), 5);
test('Divide with decimal 7 / 2', divide(7, 2), 3.5);
test('Divide negative -12 / 4', divide(-12, 4), -3);

console.log(`\n📊 Test Results:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);

if (failed > 0) {
    console.log('\n💥 Some tests failed!');
    process.exit(1);
} else {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
}