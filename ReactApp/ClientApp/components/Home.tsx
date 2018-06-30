import * as React from 'react';
import { PageHeader, ListGroup, ListGroupItem, Panel, Label, Carousel, Image } from 'react-bootstrap'; 

import { RouteComponentProps } from 'react-router-dom';


interface NewsItem {
    header: string; 
    date: string; 
}

interface ProjectElement {
    title: string;
    description: string;
    releaseDate: string;
    imgSrc: string; 
}

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {

    newsList: NewsItem[] = [
        { header: "We started developing our Website!!", date: "June 30, 2018" },
        { header: "We are currently developing other projects", date: "May 05, 2017" },
        { header: "Everyday we lit", date: "June 30, 2000" },
        { header: "Two rams are getting slaughtered", date: "September 30, 2010" },

    ]

    projects: ProjectElement[] = [
        {
            title: "Alebi",
            description: "Alebi is a short puzzle game where you play as Naga, the camel, as she tried to get back her stolen delicious milk!",
            releaseDate: "Jan 2020",
            imgSrc: "/ram.png"
        },
        {
            title: "Rambot",
            description: "Interactive multi platform chat bot that can perform numerous textual and vocal commands", 
            releaseDate: "Feb 2020",
            imgSrc: "/ram.png"
        },
        {
            title: "ChainedRamWeb",
            description: "Create a website for ChainedRam and make it good",
            releaseDate: "Jan 2019",
            imgSrc: "/ram.png"
        }]

    public render() {
        return <div>
            <Panel>
                <Panel.Heading style={{ fontSize:26 }}>Chained Ram News:</Panel.Heading>
                {this.newsList.map((n, i) =>
                    <ListGroupItem key={i} header={n.header}>{n.date}</ListGroupItem>
                    )}
            </Panel>

            
            <Panel>
                <Panel.Heading style={{ fontSize: 26 }}>Current Projects</Panel.Heading>
                <Carousel>
                    {this.projects.map((p, i) =>
                        <Carousel.Item key={i}>
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
