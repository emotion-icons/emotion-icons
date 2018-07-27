import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.373 0 0 5.37 0 12s5.373 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0zm-.84 4.67h1.68v8.36h-1.68V4.67zM12 18.155a5.866 5.866 0 1 1-1.55-11.523v1.71a4.247 4.247 0 0 0-2.695 3.96 4.245 4.245 0 1 0 8.491-.005 4.246 4.246 0 0 0-2.694-3.95V6.63a5.868 5.868 0 0 1-1.551 11.524z" key="k0" />
]

export const hex='#E01B22'
const Toggl = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
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
          ? [<title key="Toggl-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Toggl',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Toggl.displayName = 'Toggl'

Toggl.defaultProps = { height: 24, width: 24}

export default Toggl
