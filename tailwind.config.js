/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                body: "#050505",
                "selected-text": "#A3A3FF",
                theme: "#5C318C",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
