module.exports = {
    content: ['./hugo_stats.json'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#523A28',
                secondary: '#8C715E',
                'background-light': '#F9F7F2',
                'paper-light': '#F3EFE6',
                'text-main': '#2D2622',
                'terminal-bg': 'rgba(255, 255, 255, 0.4)',
            },
            fontFamily: {
                display: ['JetBrains Mono', 'monospace'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    }
};