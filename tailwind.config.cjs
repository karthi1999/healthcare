/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                128: "40rem",
                129: "38rem",
                130: "30rem",
                131: "52rem",
                132: "44rem",
                133: "38rem",
                134: "42rem",
                135: "36rem",
                136: "31rem",
                137: "34rem",
                138: "28rem",
                139: "33rem"

            },
            colors: {
                primary: '#507d34',
            },
        },
        ringOffsetWidth: {
            3: "3px",
            6: "6px",
            10: "10px",
        },
        screens: {
            om: "300px",

            sk: "320px",
            // => @media (min-width: upto 320px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
}
