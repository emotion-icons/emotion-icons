import * as React from 'react'
import {AutoSizer, Grid, WindowScroller} from 'react-virtualized'

import {IconCard} from './IconCard'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  text-align: center;
`
// background: linear-gradient(to bottom, #46c9e5 0%, #d26ac2 100%);
// background-size: cover;
// background-repeat: no-repeat;
// background-attachment: fixed;

const CardWrapper = styled('div')`
  padding: 6px;
`
//background: ${p => (p.theme.docz.mode === 'light' ? 'white' : 'white')};
const Grids = styled('div')`
  border-radius: 5px;
`
// background: linear-gradient(to bottom, #46c9e5 0%, #d26ac2 100%);
// background-size: cover;
// background-repeat: no-repeat;
// background-attachment: fixed;
const Search = styled('input')`
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 1.5em;
  padding: 12px;
  width: 100%;
  max-width: 400px;
  color: ${p => p.theme.docz.colors.sidebarText};
  font-weight: 300;
  outline: none;
  text-align: center;
  font-size: 1.2rem;
`

export class IconExplorer extends React.Component {
  state = {
    search: '',
  }

  updateSearch = event => {
    const search = event.target.value
    this.setState({search})
  }

  render() {
    const filteredIcons = this.state.search
      ? this.props.search.search(this.state.search)
      : this.props.icons

    const cellRenderer = columnCount => ({columnIndex, key, rowIndex, style}) => {
      const idx = rowIndex * columnCount + columnIndex
      if (idx >= filteredIcons.length) return null

      const {importPath, icon, name, pack} = filteredIcons[idx]

      return (
        <CardWrapper key={key} style={style}>
          <IconCard Icon={icon} name={name} pack={pack} key={importPath} />
        </CardWrapper>
      )
    }

    return (
      <Wrapper>
        <Search type="text" onChange={this.updateSearch} placeholder="Search icons..." />
        <Grids>
          <WindowScroller>
            {({height, isScrolling, onChildScroll, scrollTop}) => (
              <AutoSizer disableHeight>
                {({width}) => {
                  const columnCount =
                    width > 1000 ? 7 : width < 400 ? 2 : width < 600 ? 3 : width < 800 ? 4 : 5
                  const rowCount = Math.ceil(filteredIcons.length / columnCount)
                  const size = Math.floor(width / columnCount)

                  return (
                    <Grid
                      autoHeight
                      cellRenderer={cellRenderer(columnCount)}
                      columnCount={columnCount}
                      columnWidth={size}
                      height={height}
                      isScrolling={isScrolling}
                      rowCount={rowCount}
                      rowHeight={size}
                      scrollTop={scrollTop}
                      width={width}
                    />
                  )
                }}
              </AutoSizer>
            )}
          </WindowScroller>
        </Grids>
      </Wrapper>
    )
  }
}
