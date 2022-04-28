import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components'
import {StateContext} from '../context/StateContext'
import { ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material'

import { amber } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    secondary: {
      main: amber[400],
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </ThemeProvider>
  )
}

export default MyApp
