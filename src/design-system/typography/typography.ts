export interface FontSize {
  size: string;
  lineHeight: string;
  letterSpacing?: string;
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
  };
  weights: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  scale: {
    h1: FontSize;
    h2: FontSize;
    h3: FontSize;
    h4: FontSize;
    body1: FontSize;
    body2: FontSize;
    caption: FontSize;
    button: FontSize;
  };
}

export const typography: Typography = {
  fontFamily: {
    primary: "'Inter', system-ui, -apple-system, sans-serif",
    secondary: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  scale: {
    h1: {
      size: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h2: {
      size: 'clamp(1.75rem, 3vw, 2.5rem)',
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
    },
    h3: {
      size: 'clamp(1.5rem, 2.5vw, 2rem)',
      lineHeight: '1.4',
    },
    h4: {
      size: 'clamp(1.25rem, 2vw, 1.75rem)',
      lineHeight: '1.4',
    },
    body1: {
      size: '1.125rem',
      lineHeight: '1.5',
    },
    body2: {
      size: '1rem',
      lineHeight: '1.5',
    },
    caption: {
      size: '0.875rem',
      lineHeight: '1.4',
    },
    button: {
      size: '1rem',
      lineHeight: '1.5',
      letterSpacing: '0.02em',
    },
  },
};