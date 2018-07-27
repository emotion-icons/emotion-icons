import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.001 1.991a9.941 9.941 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142 1.895 1.895 4.406 2.938 7.072 2.938s5.177-1.043 7.07-2.937c3.899-3.898 3.899-10.243 0-14.144a9.938 9.938 0 0 0-7.07-2.937zm7.927 11h-1.937v-2h1.934c.084.664.085 1.336.003 2zm-5.954-2.187c.005.06.018.117.018.178A1.993 1.993 0 0 1 12 12.975a1.992 1.992 0 0 1 0-3.983c.293 0 .569.067.819.181l4.452-3.18c.131.114.263.227.387.351.359.359.672.747.948 1.152l-4.632 3.308zm-2.983-6.741a8.056 8.056 0 0 1 1.01-.071c.334 0 .663.027.99.068v1.932h-2V4.063zM7.098 5.685l1.357 1.357-1.414 1.414L5.685 7.1c.203-.261.418-.516.658-.756.239-.24.493-.454.755-.659zm-3.023 5.306h1.916v2H4.072a8.063 8.063 0 0 1 .003-2zm13.582 6.667c-1.516 1.516-3.524 2.351-5.656 2.351s-4.142-.835-5.658-2.352A7.953 7.953 0 0 1 4.584 15h14.832a7.957 7.957 0 0 1-1.759 2.658z" key="k0" />
]


const Dashboard = ({ title, ...restProps }) => {
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
          ? [<title key="Dashboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dashboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dashboard.displayName = 'Dashboard'

Dashboard.defaultProps = { height: 24, width: 24}

export default Dashboard
