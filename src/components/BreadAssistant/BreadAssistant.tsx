import BreadItem from 'components/BreadAssistant/views/BreadItem'
import BreadTable from 'components/BreadAssistant/views/BreadTable'
import styled from 'styled-components'
const Block = styled.div`
  margin-bottom: 10px;
`
function BreadAssistant() {
  return (
    <div>
      <h2>面包助手</h2>
      <h3>样例: </h3>
      <Block>
        <BreadItem />
      </Block>
      <Block>
        <BreadTable />
      </Block>
    </div>
  )
}
export default BreadAssistant
