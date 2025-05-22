// Simple linter to check code quality
const fs = require('fs');

console.log('🔍 Running code linting...\n');

let issues = 0;

function checkFile(filename, rules) {
    if (!fs.existsSync(filename)) {
        console.log(`⚠️  File ${filename} not found`);
        return;
    }
    
    const content = fs.readFileSync(filename, 'utf8');
    console.log(`📄 Checking ${filename}...`);
    
    rules.forEach(rule => {
        const matches = rule.pattern.test(content);
        if (rule.shouldMatch && !matches) {
            console.log(`❌ ${rule.message}`);
            issues++;
        } else if (!rule.shouldMatch && matches) {
            console.log(`❌ ${rule.message}`);
            issues++;
        } else {
            console.log(`✅ ${rule.passMessage || rule.message}`);
        }
    });
    
    console.log('');
}

// HTML file checks
checkFile('index.html', [
    {
        pattern: /<!DOCTYPE html>/i,
        shouldMatch: true,
        message: 'HTML5 DOCTYPE declaration found'
    },
    {
        pattern: /<title>/i,
        shouldMatch: true,
        message: 'Page title found'
    },
    {
        pattern: /lang="[a-z]+"/i,
        shouldMatch: true,
        message: 'Language attribute found'
    }
]);

// CSS file checks
checkFile('styles.css', [
    {
        pattern: /\*\s*{/,
        shouldMatch: true,
        message: 'CSS reset/normalize found'
    },
    {
        pattern: /@media/i,
        shouldMatch: true,
        message: 'Responsive design (media queries) found'
    }
]);

// JavaScript file checks
checkFile('script.js', [
    {
        pattern: /function\s+\w+\(/,
        shouldMatch: true,
        message: 'Function declarations found'
    },
    {
        pattern: /console\.log\(/,
        shouldMatch: false,
        message: 'No console.log statements in production code'
    }
]);

console.log(`\n📊 Linting Results:`);
console.log(`🔍 Issues found: ${issues}`);

if (issues > 0) {
    console.log('\n💥 Linting failed! Please fix the issues above.');
    process.exit(1);
} else {
    console.log('\n🎉 Code quality checks passed!');
    process.exit(0);
}