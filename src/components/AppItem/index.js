// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-card-container">
      <img src={imageUrl} alt={appName} className="custom-app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
