/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#F2B705",
        "custom-blue": "#3C86A3",
        "custom-dk-blue": "#20293A",
        "custom-lite-blue": "#8FBDD9",
        "custom-dk-red": "#7D0323",
        "custom-lite-blue-two": "#8DD2FA",
        "custom-red": "#8A2140",
        "custom-blue-card": "#1d293b",
      },
    },
  },
  plugins: [],
};
