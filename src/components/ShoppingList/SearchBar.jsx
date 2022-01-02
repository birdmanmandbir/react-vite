import { Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
const inputStyle = {
  width: 120,
  marginBottom: 15,
  marginRight: 15
}
function SearchBar(props) {
  return (
    <div className="searchBar">
      <Input placeholder="Search..." style={inputStyle}></Input>
      <Checkbox>Only show products in stock</Checkbox>
    </div>
  )
}
export default SearchBar
