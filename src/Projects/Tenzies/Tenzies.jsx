import { Provider } from 'react-redux'
import store from './redux/app/store'
import './index.css'

const Tenzies = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Tenzies