import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';
import { typography } from '../typography/typography';

interface GlobalStylesProps {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --accent: ${({ theme }) => theme.colors.accent};
    --background: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --text: ${({ theme }) => theme.colors.text};
    --text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --border: ${({ theme }) => theme.colors.border};
    --error: ${({ theme }) => theme.colors.error};
    --warning: ${({ theme }) => theme.colors.warning};
    --success: ${({ theme }) => theme.colors.success};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${typography.fontFamily.primary};
    background-color: var(--background);
    color: var(--text);
    line-height: ${typography.scale.body1.lineHeight};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1 {
    font-family: ${typography.fontFamily.secondary};
    font-size: ${typography.scale.h1.size};
    line-height: ${typography.scale.h1.lineHeight};
    letter-spacing: ${typography.scale.h1.letterSpacing};
    font-weight: ${typography.weights.bold};
  }

  h2 {
    font-family: ${typography.fontFamily.secondary};
    font-size: ${typography.scale.h2.size};
    line-height: ${typography.scale.h2.lineHeight};
    letter-spacing: ${typography.scale.h2.letterSpacing};
    font-weight: ${typography.weights.bold};
  }

  h3 {
    font-family: ${typography.fontFamily.secondary};
    font-size: ${typography.scale.h3.size};
    line-height: ${typography.scale.h3.lineHeight};
    font-weight: ${typography.weights.medium};
  }

  h4 {
    font-family: ${typography.fontFamily.secondary};
    font-size: ${typography.scale.h4.size};
    line-height: ${typography.scale.h4.lineHeight};
    font-weight: ${typography.weights.medium};
  }

  p {
    font-size: ${typography.scale.body1.size};
    line-height: ${typography.scale.body1.lineHeight};
  }

  button {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.scale.button.size};
    line-height: ${typography.scale.button.lineHeight};
    letter-spacing: ${typography.scale.button.letterSpacing};
    font-weight: ${typography.weights.medium};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;