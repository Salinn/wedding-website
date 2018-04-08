//Redux
import {connect} from 'react-redux';
//Components
import Photos from '../components/photos/Photos';

function mapStateToProps(state) {
    return {
        photos: state.photos,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)