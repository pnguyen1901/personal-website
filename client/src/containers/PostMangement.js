import { connect } from 'react-redux';
import { setCurrentPost } from '../store/blog/actions';
import BlogItem from '../components/blog/BlogItem';

const mapDispatchToProps = dispatch => ({
    setCurrentPost: id => dispatch(setCurrentPost(id))
})

export default connect(mapDispatchToProps)(BlogItem)