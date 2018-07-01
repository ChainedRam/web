import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Panel, PanelBody } from 'react-bootstrap';

export default class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <Panel>
                <Panel.Heading>Contact us:</Panel.Heading>
                <Panel.Body>
                <ul>
                    <li> Email: contact@chainedram.com</li>
                    <li><a href="https://twitter.com/ChainedRam">Twitter</a></li>
                    <li><a href="https://www.facebook.com/ChainedRam/">Facebook</a></li>
                    <li><a href="https://discord.gg/b2pgr9E">Discord</a></li>
                    </ul>
                </Panel.Body>
            </Panel>
        </div>;
    }
}
