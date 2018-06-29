import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h2>Contact us:</h2>
            <p>you can reach us at:</p>

            <ul>
                <li> Our Email: contact@chainedram.com</li>
                <li><a href="https://twitter.com/ChainedRam">Twitter</a></li>
                <li><a href="https://www.facebook.com/ChainedRam/">Facebook</a></li>
                <li><a href="https://discord.gg/b2pgr9E">Discord</a></li>
            </ul>
        </div>;
    }
}
