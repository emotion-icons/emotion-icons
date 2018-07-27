import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M244.2 217.5l19.3 57.7-59.8 20-19.3-57.7 59.8-20zm41.4 243.7C131.6 507.4 65 471.6 18.8 317.6S8.4 97 162.4 50.8C316.4 4.6 383 40.4 429.2 194.4c46.2 154 10.4 220.6-143.6 266.8zM366.2 265c-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-19.3-57.7 29-9.7c12.2-3.9 18.6-17.2 14.7-29.4-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-59.8 20.1-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l19.3 57.7-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 59.8-20.1 10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 29-9.7c12.2-4.2 18.6-17.5 14.7-29.6z" key="k0" />
]


const Slack = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="Slack-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Slack',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Slack.displayName = 'Slack'

Slack.defaultProps = { height: undefined, width: undefined}

export default Slack
