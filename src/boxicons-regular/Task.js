import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 4h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-9 0h4v2h-4V4zm8 16H6V6h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h2v14z" key="k0" />
,
<path d="M11 14.586l-1.793-1.793-1.414 1.414 2.5 2.5a.997.997 0 0 0 1.414 0l4.5-4.5-1.414-1.414L11 14.586z" key="k1" />
]


const Task = ({ title, ...restProps }) => {
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
          ? [<title key="Task-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Task',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Task.displayName = 'Task'

Task.defaultProps = { height: 24, width: 24}

export default Task
