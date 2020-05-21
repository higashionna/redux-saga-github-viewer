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
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTemp)
