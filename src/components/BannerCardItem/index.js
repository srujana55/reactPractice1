import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const BannerOutput = props => {
  const {bannerProps} = props
  const {headerText, description, className} = bannerProps
  return (
    <div className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button">Show More</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

export default BannerOutput
