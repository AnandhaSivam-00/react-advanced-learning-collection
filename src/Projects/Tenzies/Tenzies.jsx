import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/app/store'

const Tenzies = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Tenzies