module.exports = {
    theme: {
    extend: {
        keyframes: {
        animatedgradient: {
            '0%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
            '100%': { 'background-position': '0% 50%' },
        },
        },
        animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        },
    },
    },
};