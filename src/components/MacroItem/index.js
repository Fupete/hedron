import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Param from '../../containers/Param'
import MacroLink from '../../containers/MacroLink'
import InputLink from '../../containers/InputLink'
import Row from '../Row'
import styled from 'styled-components'

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`

const MacroItem = ({
  nodeId, onLearningClick, onDeleteClick, paramLinks,
  inputLinkIds, isLearning, macroId, inputSettingsAreVisible, paramLinksAreVisible
}) => (
  <div>
    <Param nodeId={nodeId}>
      {
        inputSettingsAreVisible &&
        <div>
          <h5>Input settings</h5>
          <Links>
            {inputLinkIds.map(id => (
              <InputLink id={id} key={id} />
            ))}
          </Links>
        </div>
      }
      {
        paramLinksAreVisible &&
        <div>
          <h5>Connected Params</h5>
          <Links>
            {paramLinks.map(item => (
              <MacroLink
                macroId={macroId}
                nodeId={item.nodeId}
                paramId={item.paramId}
                key={item.nodeId}
              />
            ))}
          </Links>
        </div>
      }

      <Row justify='space-between'>
        <Button onClick={onLearningClick}>
          {isLearning ? 'Stop Learning' : 'Start Learning'}
        </Button>
        <Button onClick={onDeleteClick}>Delete Macro</Button>
      </Row>
    </Param>

  </div>
)

MacroItem.propTypes = {
  isLearning: PropTypes.bool,
  paramLinks: PropTypes.array.isRequired,
  inputLinkIds: PropTypes.array.isRequired,
  nodeId: PropTypes.string.isRequired,
  macroId: PropTypes.string.isRequired,
  onLearningClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  inputSettingsAreVisible: PropTypes.bool,
  paramLinksAreVisible: PropTypes.bool
}

export default MacroItem