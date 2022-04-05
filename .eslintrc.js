module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',

                // Overrides

                'no-undef': 0,
                'react-native/no-inline-styles': 0,
                'comma-dangle': ['error', 'never']
            }
        }
    ]
};
