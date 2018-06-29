import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Projects extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h2><strong> Projects:</strong></h2>
            <h3>Current:</h3>

            <h4>Alebi</h4>
            <p> Alebi is a short puzzle game where you play as Naga, the camel, as she tried to get back her stolen delicious milk!</p>

            <h5>Members:</h5>
            <ul>
                <li>Lead Design: Montring(Our token black guy)</li>
                <li> Lead developer: KLD</li>
                <li>Writer: Dragim</li>
            </ul>
            <h5><em>Release date:</em></h5>
            <p> Jan 2020</p>

            <h4>Rambot</h4>
            <p>Interactive multi platform chat bot that can perform numerous textual and vocal commands</p>
            <h5>Members:</h5>
            <ul>
                <li> Lead developer: KLD</li>
            </ul>
            <h5><em>Release date:</em></h5>
            <p> Feb 2020</p>


            <h3>Future:</h3>

            <h4>Sophia</h4>
            <p> This is a story about a robot that attempts to achieve it's goal about making every human life better, by exterminating humans </p>
            <h5>Members:</h5>
            <ul>
                <li>Writer: Qanobi</li>
                <li>Editor: KLD</li>
            </ul>
        </div>;
    }
}
