import React from 'react'
import {Global, css} from '@emotion/react'
import {GitHubCorner} from './GithubCorner'

const globalStyle = css`
  html {
    height: 100%;
    font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    text-align: center;
    background-size: cover;
    background: linear-gradient(20deg, #151413, #4f5050);
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
    overflow-x: hidden;
  }

  body {
    margin: 0 auto;
    padding: 1em;
    max-width: 1200px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #fff;
  }

  h1 {
    font-weight: 600;
    font-size: 1.7rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: 4rem;
  }

  code {
    display: block;
    margin: 0 auto;
    white-space: pre;
    padding: 12px;
    text-align: left;
    color: #fff;
    overflow-x: scroll;
  }

  code.demo {
    display: inline-block;
    margin-bottom: 12px;
    margin-top: 1em;
    background: rgba(255, 255, 255, 0.2);
  }

  .icon-card-wrapper {
    padding: 6px;
  }

  .icon-card {
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    cursor: pointer;
    color: #fff;
    transition: transform 0.5s ease-out;
    will-change: transform;
    width: 100%;
    height: 100%;
  }

  .icon-card:hover {
    transform: scale(1.05);
  }

  .icon-card .name {
    font-weight: 500;
    overflow-x: scroll;
    width: 100%;
  }

  .icon-card code {
    width: 100%;
    text-align: center;
    padding: 0;
  }

  .icon-card ::-webkit-scrollbar {
    display: none;
  }

  .badges {
    padding: 0;
    min-height: 26px;
  }

  .badges > * {
    margin-right: 6px;
  }

  .badges > *:last-child {
    margin-right: 0;
  }

  .search-box {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    margin-bottom: 1.5em;
    padding: 12px;
    width: 100%;
    max-width: 400px;
    color: #fff;
    font-weight: 300;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .ReactVirtualized__Grid {
    outline: none;
  }
`

const Layout: React.SFC = ({children}) => (
  <div>
    <Global styles={globalStyle} />
    <GitHubCorner />
    {children}
  </div>
)

export default Layout
