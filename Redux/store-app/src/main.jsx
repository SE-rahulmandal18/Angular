import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import productStore from './store/productStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {productStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  

)
