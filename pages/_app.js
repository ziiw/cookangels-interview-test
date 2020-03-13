import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            font-family: Arial, sans-serif;
            max-width: 1140px;
            margin: auto;
          }
        `}</style>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
