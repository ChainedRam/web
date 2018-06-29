import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class About extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h3><strong>Who we are:</strong></h3>
            <p> We are a group of very ambitious rams that got loose and are now devoted to gaming fun, both playing and making.</p>

            <h3> <strong>Group aim:</strong></h3>
            <p>ChainedRam aims to create a platform to allow creative Rams transform their knowledge and time into fun gaming experience.</p>

            <p>All hail Ramsy the wise.</p>
            <img src="https://i.pinimg.com/originals/a1/be/e5/a1bee54b85aac33827ca645ef08a33ed.jpg" />
        </div>;
    }
}
