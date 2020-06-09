import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IssueTemp from '../components/templates/IssueTemp'
import { actionCreators } from '../actions/index'


const mapStateToProps = ({ user, issue }) => {
  return {
    data: issue.data,
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchIssueList: actionCreators.issueFetchRequested,
    createIssue: actionCreators.issueCreateRequested,
    showModal: actionCreators.showModal,
    removeModal: actionCreators.removeModal,
    updateIssue: actionCreators.issueUpdateRequested
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTemp)
