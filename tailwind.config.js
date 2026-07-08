/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        // Berkeley Mono is proprietary/paid — JetBrains Mono is the closest open-source match
        mono: [
          'Berkeley Mono',
          'JetBrains Mono',
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          'Berkeley Mono',
          'JetBrains Mono',
          'IBM Plex Mono',
          'ui-monospace',
          'monospace',
        ],
      },

      colors: {
        primary: '#e2dfdf',
        'on-primary': '#030202',
        ink: '#e2dfdf',
        'ink-deep': '#fff0f0',
        charcoal: '#d3cfcf',
        body: '#bababd',
        mute: '#9d9b9b',
        stone: '#8c8c91',
        ash: '#676565',

        canvas: '#030202',
        'surface-soft': '#080707',
        'surface-card': '#110e0e',
        'surface-dark': '#e2dfdf',
        'surface-dark-elevated': '#d3cfcf',

        hairline: 'rgba(255,240,240,0.12)',
        'hairline-strong': '#9d9b9b',

        'on-dark': '#030202',
        'on-dark-mute': '#676565',

        accent: '#007aff',
        'accent-hover': '#0056b3',
        'accent-active': '#004085',
        warning: '#ff9f0a',
        'warning-hover': '#cc7f08',
        'warning-active': '#995f06',
        danger: '#ff3b30',
        'danger-hover': '#d70015',
        'danger-active': '#a50011',
        success: '#30d158',

        // legacy aliases kept so existing classes don't break
        background: '#e2dfdf',
        foreground: '#030202',
        border: 'rgba(255,240,240,0.12)',
        'border-hover': '#9d9b9b',
        card: '#110e0e',
        'card-hover': '#080707',
      },

      fontSize: {
        'display-xl': ['38px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-md': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-strong': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-tight': ['16px', { lineHeight: '1', fontWeight: '500' }],
        'link-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'button-md': ['16px', { lineHeight: '2', fontWeight: '500' }],
        'caption-md': ['14px', { lineHeight: '2', fontWeight: '400' }],
      },

      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '4px',
        full: '9999px',
      },

      spacing: {
        xxs: '1px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        xxl: '32px',
        section: '96px',
      },

      // no shadows/gradients in this system — flat, hairline-divided sections
      boxShadow: {
        none: 'none',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },

  plugins: [],
};