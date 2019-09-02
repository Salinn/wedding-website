//Redux
import {connect} from 'react-redux';
//Components
import Photos from '../components/photos/WeddingPhotos';

function mapStateToProps(state) {
    return {
        title: 'Our Wedding Photos',
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)