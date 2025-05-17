export type ThemeMode = 'light' | 'dark';

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ColorPalette;
}

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#FFB5E8',    // Pastel pink
    secondary: '#B5B9FF',  // Pastel blue
    accent: '#AFF8DB',     // Pastel mint
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2C3E50',
    textSecondary: '#6C757D',
    border: '#DEE2E6',
    error: '#FFB5B5',      // Pastel red
    warning: '#FFE4B5',    // Pastel orange
    success: '#B5EAD7',    // Pastel green
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#D48FB8',    // Darker pastel pink
    secondary: '#8589CC',  // Darker pastel blue
    accent: '#7FCFB3',     // Darker pastel mint
    background: '#1A1A1A',
    surface: '#2D2D2D',
    text: '#E9ECEF',
    textSecondary: '#ADB5BD',
    border: '#404040',
    error: '#CC8585',      // Darker pastel red
    warning: '#CCB185',    // Darker pastel orange
    success: '#85BBA7',    // Darker pastel green
  },
};