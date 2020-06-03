import React, {Component} from 'react';

import Headers from '../components/headers';
import Content from '../components/content';

class Home extends Component {
    render(){
        return(
            <div>
            <Headers/>
            <Content/>
            </div>
        )
    }
}

export default Home