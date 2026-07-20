/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Geist Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        sans: [
          'Geist Sans',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },

      colors: {
        primary: 'var(--color-ink)',
        'on-primary': 'var(--color-canvas)',
        ink: 'var(--color-ink)',
        'ink-deep': 'var(--color-ink-deep)',
        charcoal: 'var(--color-charcoal)',
        body: 'var(--color-body)',
        mute: 'var(--color-mute)',
        stone: 'var(--color-stone)',
        ash: 'var(--color-ash)',

        canvas: 'var(--color-canvas)',
        'surface-soft': 'var(--color-surface-soft)',
        'surface-card': 'var(--color-surface-card)',
        'surface-dark': 'var(--color-surface-dark)',
        'surface-dark-elevated': 'var(--color-surface-dark-elevated)',

        hairline: 'var(--color-hairline)',
        'hairline-strong': 'var(--color-hairline-strong)',

        'on-dark': 'var(--color-on-dark)',
        'on-dark-mute': 'var(--color-on-dark-mute)',

        accent: 'var(--color-accent)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
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
