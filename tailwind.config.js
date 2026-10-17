/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#eef9ff',
                    100: '#d8f1ff',
                    200: '#b9e7ff',
                    300: '#89daff',
                    400: '#52c3ff',
                    500: '#2aa4ff',
                    600: '#1384f8',
                    700: '#0c6ce4',
                    800: '#1058b9',
                    900: '#134b92',
                    950: '#0e2e5a',
                }
            }
        }
    }
};
