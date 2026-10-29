module.exports = Object.assign({
    theme: {
      extend: {
        colors: {
          base:        'rgb(var(--c-base) / <alpha-value>)',
          surface:     'rgb(var(--c-surface) / <alpha-value>)',
          surfaceAlt:  'rgb(var(--c-surface-alt) / <alpha-value>)',
          ink:         'rgb(var(--c-ink) / <alpha-value>)',
          muted:       'rgb(var(--c-muted) / <alpha-value>)',
          edge:        'rgb(var(--c-edge) / <alpha-value>)',
          accent:      'rgb(var(--c-accent) / <alpha-value>)',
          brand:       '#9C6B3C',
          brandDark:   '#7E5430',
          brandDeeper: '#5E3D22',
          gold:        '#D4A574',
          espresso:    '#120E0A',
        },
        fontFamily: {
          display: ['"Playfair Display"', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        },
        boxShadow: {
          card: '0 10px 30px -12px var(--shadow-card)',
          glow: '0 0 0 1px rgba(156,107,60,.4), 0 14px 44px -14px rgba(156,107,60,.55)',
        },
        keyframes: {
          fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
          riseIn:     { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        },
        animation: {
          fadeIn:     'fadeIn .2s ease-out',
          riseIn:     'riseIn .5s cubic-bezier(.22,1,.36,1) both',
        },
      },
    },
  }, { content: ['./index.html'] });
