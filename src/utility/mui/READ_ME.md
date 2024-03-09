# Install
run: yarn add @mui/material @emotion/react @emotion/styled

## Font
- MUI runs roboto by default
run: yarn add @fontsource/roboto

- Fontsource can be configured to load specific subsets, weights and styles. Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

## Icons
- MUI icon package
run: yarn add @mui/icons-material