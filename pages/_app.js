import * as React from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import ColorSwitcher from '../components/color-switcher'
import '../styles/crt.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider
        theme={{
          ...theme,
          colors: { ...theme.colors, ...theme.colors.modes.dark, modes: {} }
        }}
      >
        <Meta
          as={Head}
          name="Hack Club"
          title="Project Moonbeam"
          description="We're using mirrors put by NASA's Apollo 11 mission to encode data, send it to the moon as a laser, and decode it back."
          color="#ec3750"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
