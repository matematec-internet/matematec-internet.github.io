/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./js/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#fdf2f2',
                    100: '#fde8e8',
                    600: '#9B2C2C', /* Wine Red inspired by image */
                    700: '#822025',
                    800: '#722F37', /* Deeper wine */
                    900: '#60242a',
                }
            },
            screens: {
                'lg': '1000px',
            }
        },
    },
    plugins: [],
}
