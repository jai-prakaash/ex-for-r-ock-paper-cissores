// tailwind.config.js
module.exports = {
    content: [
      './index.html', // your HTML files to scan for Tailwind classes
      './src/**/*.{html,js}', // if you have JS files in your src folder
    ],
    theme: {
      extend: {
        colors: {
          customBlue: '#1E40AF',
          customRed: '#EF4444',
        },
        spacing: {
          '128': '32rem', // custom spacing example
        },
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  