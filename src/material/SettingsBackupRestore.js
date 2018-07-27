import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 0 0-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 0 1-11.06 5.7l-1.42 1.44A9 9 0 1 0 12 3z" key="k0" />
]


const SettingsBackupRestore = ({ title, ...restProps }) => {
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
          ? [<title key="SettingsBackupRestore-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SettingsBackupRestore',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SettingsBackupRestore.displayName = 'SettingsBackupRestore'

SettingsBackupRestore.defaultProps = { height: 24, width: 24}

export default SettingsBackupRestore
