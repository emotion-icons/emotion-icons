import * as React from 'react'
import copy from 'copy-to-clipboard'
import styled from '@emotion/styled'

const Code = styled('code')`
  display: none;
  @media screen and (min-width: 58em) {
    display: block;
  }

  margin: 0 auto;
  white-space: pre;
  padding: 12px;
  text-align: left;
  color: #000;
  overflow-x: hidden;
  font-size: 0.6rem;

  width: 100%;
  text-align: center;
  padding: 0;
`
// box-shadow: ${p =>
//     p.theme.docz.mode === 'light'
//       ? '0 3px 5px 2px rgba(0, 0, 0, 0.3)'
//       : '0 3px 5px 2px rgba(0, 0, 0, 0.5)'};

const Wrapper = styled('div')`
  background: ${p => (p.theme.docz.mode === 'light' ? null : 'rgba(255, 255, 255, 0.9)')};
  border-radius: 2px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  cursor: pointer;
  color: #000;
  transition: transform 0.5s ease-out;
  will-change: transform;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const Name = styled('div')`
font-weight: 500;
overflow-x: hidden;
width: 100%;
  }
`

export class IconCard extends React.PureComponent {
  mounted = false
  state = {copied: false}

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  get iconImport() {
    return `emotion-icons/${this.props.pack}/${this.props.name}`
  }
  get iconShortImport() {
    return `${this.props.pack}/${this.props.name}`
  }

  copy = () => {
    copy(this.iconImport)
    this.setState({copied: true})

    setTimeout(() => {
      if (this.mounted) {
        this.setState({copied: false})
      }
    }, 2000)
  }

  render() {
    const {Icon, name} = this.props
    return (
      <Wrapper onClick={() => this.copy()}>
        <div>{Icon && <Icon size={48} title={`${name} icon`} />}</div>
        <Name>{name}</Name>
        <Code title={this.iconImport}>{this.state.copied ? 'Copied!' : this.iconShortImport}</Code>
      </Wrapper>
    )
  }
}
