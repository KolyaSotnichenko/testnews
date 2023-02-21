import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const navLink = [
    {
        path: '/news',
        title: 'News'
    },
    {
        path: '/profile',
        title: 'Profile'
    }
]

const Navbar: React.FC = () => {



  return (
    <Box
        component="ul"
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}
    >
        {navLink.map((link, index) => (
            <Box 
                key={index}
                component="li"
                sx={{
                    listStyle: 'none',
                }}
            >
                <Link 
                    style={{
                        textDecoration: 'none', 
                        color: 'black'
                    }} 
                    to={link.path}
                >
                    <Typography
                        sx={{
                            textDecoration: 'none',
                            '&:hover': {
                                color: 'red'
                            }
                        }}
                    >
                        {link.title}
                    </Typography>
                </Link>
            </Box>
        ))}
    </Box>
  )
}

export default Navbar