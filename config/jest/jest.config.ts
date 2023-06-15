/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    modulePaths: [
        '<rootDir>src',
    ],
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[jt]s?(x)',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestSvgMock.tsx'),
    },
};
