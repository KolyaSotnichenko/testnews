import { Container } from '@mui/system'
import React from 'react'
import Header from './Header'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props:Props) => {
  return (
    <Container maxWidth="lg" sx={{ margin: '20px auto' }}>
        <Header />
        {props.children}
    </Container>
  )
}

export default Layout