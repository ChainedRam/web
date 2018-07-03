import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ApplicationState } from 'ClientApp/store';
import * as Ram from '../store/Ram';

type ProjectsProps =
    Ram.RamState      // ... state we've requested from the Redux store
    & typeof Ram.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>; // ... plus incoming routing parameters


class Projects extends React.Component<ProjectsProps, {}> {

    componentWillMount() {
        this.props.requestProjects(); 
    }


    public render() {
        return <div>
            <Panel>
                <Panel.Heading><h3>Current Projects</h3></Panel.Heading>
                <Panel.Body>

                    {this.props.projects.map((p,i) =>
                        <div key={i}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>

                        <h5>Members:</h5>
                        <ul>
                            {p.members.map((m,i) =>
                                <li key={i}>{m.role}: {m.name}</li>
                                )}
                        </ul>
                        <h5><em>Release date:</em></h5>
                        <p>{p.releaseDate}</p>
                    </div>
                    )}
                </Panel.Body>
            </Panel>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.ram, // Selects which state properties are merged into the component's props
    Ram.actionCreators                 // Selects which action creators are merged into the component's props
)(Projects as any) as any;