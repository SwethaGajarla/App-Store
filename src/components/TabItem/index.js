// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, isActive, onActiveTab} = props
  const {tabId, displayText} = tab
  const ActiveTab = isActive ? 'active-tab' : 'inactive-tab'

  const onTabChange = () => {
    onActiveTab(tabId)
  }
  return (
    <li>
      <button type="button" className={ActiveTab} onClick={onTabChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
