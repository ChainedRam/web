import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h2>Chained ram news:</h2>
            <ul>
                <li><p>We started developing our Website!!</p></li>
                <li><p>We are currently developing other projects</p></li>
                <li><p>Everyday we lit</p></li>
                <li>Two rams are getting slaughtered</li>
            </ul>

            <h2> Current projects:</h2>
            <h3><strong>Alebi</strong></h3>
            <ul>
                <li><p> Alebi is a short puzzle game where you play as Naga, the camel, as she tried to get back her stolen delicious milk!</p></li>
            </ul>
        </div>;
    }
}
