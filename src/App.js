import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #2853c3;
  background-size: cover;
  height: 70vh;
  text-align: center;
  button {
    margin-top: 15rem;
    background: #33c0ff;
    color: #fff;
    padding: 20px 30px 20px 30px;
    border-radius: 5px;
    font-size: 22px;
    &:hover {
      box-shadow: 5px 10px #02344a;
    }
  }
`

function App() {
  return (
    <Header>
      <button>Welcome</button>
    </Header>
  )
}

export default App
