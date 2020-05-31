import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import { actionCreators } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUser: actionCreators.userFetchRequested
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)