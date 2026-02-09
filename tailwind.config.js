module.exports = {
    content: ['./hugo_stats.json', './layouts/**/*.html', './content/**/*.{md,html}', './assets/**/*.{js,css}'],
    // Safelist für per JavaScript hinzugefügte Klassen
    safelist: [
        'text-green-500',
        'bg-green-500/10',
        'text-red-500',
        'bg-red-500/10',
    ],
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
                title: ["'Bagel Fat One'", 'sans-serif'],
                display: ['JetBrains Mono', 'monospace'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Roboto', 'sans-serif'],
                huge: ['Inter', 'sans-serif'],
            },
        },
    }
};