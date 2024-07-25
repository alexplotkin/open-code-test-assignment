const generateSpacings = () => {
  const DEFAULT_SPACING_SCALE = 0.25;
  const DEFAULT_HALF_SPACING_SCALE = 0.125;

  const spacings = {
    full: '100%',
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
  };

  const convertRemsToFloat = (value) => parseFloat(value.replace('rem', ''));

  let prev;
  // eslint-disable-next-line no-plusplus
  for (let i = 4; i <= 100; i++) {
    if (!prev) {
      prev = 1;
      spacings[i] = `${prev}rem`;
      spacings[`${i}.5`] = `${convertRemsToFloat(spacings[i]) + DEFAULT_HALF_SPACING_SCALE}rem`;
      continue; // eslint-disable-line no-continue
    }
    spacings[i] = `${prev + DEFAULT_SPACING_SCALE}rem`;
    spacings[`${i}.5`] = `${convertRemsToFloat(spacings[i]) + DEFAULT_HALF_SPACING_SCALE}rem`;
    prev += DEFAULT_SPACING_SCALE;
  }

  return spacings;
};

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: generateSpacings(),
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1248px',
        '2xl': '1248px',
      },
      colors: {
        accent: '#294F74',
        dark: {
          500: '#1D2939',
          400: '#344054',
          300: '#475467',
          200: '#667085',
          100: '#98A2B3',
        },
        light: {
          400: '#D0D5DD',
          300: '#EAECF0',
          200: '#EDF2F5',
          100: '#F2F4F7',
        }
      },
      borderRadius: {
        '4.5xl': '2.25rem',
      },
      backgroundImage: {
        'header-top' : "url('/assets/header-top.png')",
        'banner-top' : "url('/assets/banner-top-attachment.png')",
        'banner-bottom' : "url('/assets/banner-bottom-attachment.png')",
      },
    },
  },
  plugins: [],
};
export default config;
