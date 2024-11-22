import forms from '@tailwindcss/forms';
import colors from "tailwindcss/colors"; // Uncommenting this will break

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    plugins: [forms],
};
