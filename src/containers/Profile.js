import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile from '../components/pages/Profile'
import { actionCreators } from '../actions'

const mapStateToProps = ({ user }) => {
    return {
        user: user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUser: actionCreators.userFetchRequested,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)