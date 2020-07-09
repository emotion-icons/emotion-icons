import * as React from 'react'

export const Badges: React.SFC = () => (
  <div className="badges">
    <a href="https://github.com/emotion-icons/emotion-icons/actions">
      <img src="https://github.com/emotion-icons/emotion-icons/workflows/CI/badge.svg" alt="Build Status" />
    </a>
    <a href="https://www.npmjs.com/package/emotion-icons">
      <img src="https://badgen.net/npm/dm/emotion-icons" alt="npm" />
    </a>
    <a href="https://www.npmjs.com/package/emotion-icons">
      <img src="https://badgen.net/npm/v/emotion-icons" alt="npm" />
    </a>
    <a href="https://emotion.sh">
      <img src="https://badgen.net/badge/built%20with/emotion/f090d5" alt="Built with Emotion" />
    </a>
    <img src="https://badgen.net/badge/powered%20by/typescript/blue" alt="Powered by TypeScript" />
  </div>
)
