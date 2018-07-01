import * as React from 'react';
import { PageHeader, ListGroup, ListGroupItem, Panel, Label, Carousel, Image } from 'react-bootstrap'; 

import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as Ram from '../store/Ram';


type HomeProps =
    Ram.RamState      // ... state we've requested from the Redux store
    & typeof Ram.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>; // ... plus incoming routing parameters

class Home extends React.Component<HomeProps, {}> {


    componentWillMount() {
        this.props.requestNews();
        this.props.requestProjects(); 
    }

    public render() {
        return <div>
            <Panel>
                <Panel.Heading style={{ fontSize: 26 }}>Chained Ram News:</Panel.Heading>
                {this.props.news.map((n, i) =>
                    <ListGroupItem key={i} header={n.header}>{n.date}</ListGroupItem>
                    )}
            </Panel>

            
            <Panel>
                <Panel.Heading style={{ fontSize: 26 }}>Current Projects</Panel.Heading>
                <Carousel>
                    {this.props.projects.map((p, i) =>
                        <Carousel.Item key={i} >
                            <div className="container" style={{ margin: "10px" }}>
                                <div className="col-xs-1 col-xs-offset-3" >
                                    <Image width={50} rounded src={p.imgSrc} style={{ marginLeft:"10px" }} />
                                </div>
                                <h3 className="center-block text-center col-xs-5">{p.title}</h3>
                                <h4 className="col-xs-6 col-xs-offset-3"><small>{p.description}</small></h4>
                                <h4 className="text-center col-xs-12"><small><em>{p.releaseDate}</em></small></h4>
                            </div>      
                    </Carousel.Item>
                )}
                </Carousel>
            </Panel>

        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.ram, // Selects which state properties are merged into the component's props
    Ram.actionCreators                 // Selects which action creators are merged into the component's props
)(Home as any) as any;
