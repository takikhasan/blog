import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    
    render() {
        // console.log('rendered');
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('mapping');
    return {
        user: state.users.find((user) => user.id === ownProps.userId)
    };
}

export default connect(mapStateToProps)(UserHeader);