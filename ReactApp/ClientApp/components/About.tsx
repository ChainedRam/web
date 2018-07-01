import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Panel, Image } from 'react-bootstrap';

export default class About extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <Panel>
                <Panel.Heading>Who We Are</Panel.Heading>
                <Panel.Body>
                    <p>We are a group of very ambitious rams that got loose and are now devoted to gaming fun, both playing and making. </p>
                </Panel.Body>
            </Panel>

            <Panel>
                <Panel.Heading>Group aim</Panel.Heading>
                <Panel.Body>
                    <p>ChainedRam aims to create a platform to allow creative Rams transform their knowledge and time into fun gaming experience </p>
                </Panel.Body>
            </Panel>

            <div className="text-center">
                <Image width="400px" src="https://i.pinimg.com/originals/a1/be/e5/a1bee54b85aac33827ca645ef08a33ed.jpg" />
                <p>All hail Ramsy the wise.</p>
            </div>
        </div>;
    }
}
