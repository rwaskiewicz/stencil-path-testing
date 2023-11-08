import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'path-test',
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{src: 'dev/**/*.html', dest:'.', keepDirStructure:true}]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
