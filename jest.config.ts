module.exports = {
    preset: 'ts-jest', // Use 'ts-jest' if using TypeScript
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', 
    },
    // Additional options as needed 
};
