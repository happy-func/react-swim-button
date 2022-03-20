import { defineConfig } from 'dumi';

const repo = 'react-swim-button';

export default defineConfig({
  mode: 'doc',
  title: repo,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  resolve: {
    includes: ['docs'],
  },
  hash: true,
  webpack5: {},
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
});
