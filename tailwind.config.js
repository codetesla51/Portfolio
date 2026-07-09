/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: [
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
          'JetBrains Mono',
          'IBM Plex Mono',
          'ui-monospace',
          'monospace',
        ],
      },

      colors: {
        primary: '#201d1d',
        'on-primary': '#fdfcfc',
        ink: '#201d1d',
        'ink-deep': '#0f0000',
        charcoal: '#302c2c',
        body: '#424245',
        mute: '#646262',
        stone: '#6e6e73',
        ash: '#9a9898',

        canvas: '#fdfcfc',
        'surface-soft': '#f8f7f7',
        'surface-card': '#f1eeee',
        'surface-dark': '#201d1d',
        'surface-dark-elevated': '#302c2c',

        hairline: 'rgba(15,0,0,0.12)',
        'hairline-strong': '#646262',

        'on-dark': '#fdfcfc',
        'on-dark-mute': '#9a9898',

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
        background: '#201d1d',
        foreground: '#fdfcfc',
        border: 'rgba(15,0,0,0.12)',
        'border-hover': '#646262',
        card: '#f1eeee',
        'card-hover': '#f8f7f7',
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