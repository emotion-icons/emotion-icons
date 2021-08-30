import {Config} from '@monorepolint/core'

const config: Config = {
  rules: {
    ':file-contents': [
      {
        options: {
          file: '.gitignore',
          templateFile: './tools/template.gitignore',
        },
        excludePackages: [
          // Custom gitignore to allow index.tsx source
          '@emotion-icons/emotion-icon',

          // Non-icon packages
          '@emotion-icons/pack-builder',
          '@emotion-icons/storybook',
        ],
      },
      {
        options: {
          file: '.npmignore',
          templateFile: './tools/template.npmignore',
        },
        excludePackages: [
          // Non-icon packages
          '@emotion-icons/pack-builder',
          '@emotion-icons/storybook',
        ],
      },
    ],

    ':consistent-dependencies': true,

    ':package-entry': [
      {
        options: {
          entries: {
            license: 'MIT',
            funding: {
              type: 'GitHub',
              url: 'https://github.com/sponsors/jacobwgillespie',
            },
            publishConfig: {
              access: 'public',
            },
          },
        },
      },
    ],

    ':alphabetical-dependencies': true,
    ':alphabetical-scripts': true,
    // './tools/alphabeticalScripts': true,

    ':package-order': {
      options: {
        order: [
          'private',
          'name',
          'version',
          'license',
          'description',
          'author',
          'contributors',
          'url',
          'homepage',
          'repository',
          'keywords',
          'funding',
          'engines',
          'bin',
          'main',
          'module',
          'types',
          'typings',
          'style',
          'sideEffects',
          'workspaces',
          'husky',
          'lint-staged',
          'files',
          'publishConfig',
          'scripts',
          'resolutions',
          'dependencies',
          'peerDependencies',
          'devDependencies',
          'optionalDependencies',
        ],
      },
    },
  },
}

module.exports = config
