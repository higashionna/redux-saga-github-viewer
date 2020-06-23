import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../components/organisms/Modal'
import { actionCreators } from '../actions/index'

const mapStateToProps = ({ ui: { modal } }) => {
    return {
        show: modal.show,
        component: modal.stack.slice(-1)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
