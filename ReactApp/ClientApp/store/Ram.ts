import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface RamState {
    news: RamNews[],
    projects: RamProject[]
}

export interface RamNews {
    header: string;
    date: string;
}

export interface RamProject {
    title: string;
    description: string;
    releaseDate: string;
    imgSrc: string;
    members: RamMember[]; 
}

export interface RamMember {
    name: string, 
    role: string
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface RequestNews {
    type: 'REQUEST_NEWS'
}

interface RecieveNews {
    type: 'RECIEVE_NEWS',
    news: RamNews[]; 
}

interface RequestProjects {
    type: 'REQUEST_PROJECTS'
}

interface RecieveProjects {
    type: 'RECIEVE_PROJECTS',
    projects: RamProject[]
}

//interface DecrementCountAction { type: 'DECREMENT_COUNT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestNews | RecieveNews
    | RequestProjects | RecieveProjects;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestNews: (): AppThunkAction<KnownAction> => (dispatch, getState) => {

        let news: RamNews[] = [
            { header: "We started developing our Website!!", date: "June 30, 2018" },
            { header: "We are currently developing other projects", date: "May 05, 2017" },
            { header: "Everyday we lit", date: "June 30, 2000" },
            { header: "Two rams are getting slaughtered", date: "September 30, 2010" },

        ];

        dispatch({ type: 'RECIEVE_NEWS', news }); 


    },
    requestProjects: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        
        let projects: RamProject[] = [
            {
                title: "Alebi",
                description: "Alebi is a short puzzle game where you play as Naga, the camel, as she tried to get back her stolen delicious milk!",
                releaseDate: "Jan 2020",
                imgSrc: "/ram.png",
                members: [{
                    name: "KLD", 
                    role: "Lead Developer"
                },
                {
                    name: "Monstring",
                    role: "Lead Game Designer"
                    },
                    {
                        name: "Dragim",
                        role: "Writter"
                    },
                ]
            },
            {
                title: "Rambot",
                description: "Interactive multi platform chat bot that can perform numerous textual and vocal commands",
                releaseDate: "Feb 2020",
                imgSrc: "/ram.png",
                members: [{ name:"KLD", role: "Lead Developer" }]
            },
            {
                title: "ChainedRamWeb",
                description: "Create a website for ChainedRam and make it good",
                releaseDate: "Jan 2019",
                imgSrc: "/ram.png",
                members: [{ name: "KLD", role: "Full Stavk Developer" }]
            }]; 

        dispatch({ type: 'RECIEVE_PROJECTS', projects }); 
    } 
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<RamState> = (state: RamState, inAction: Action) => {
    let action: KnownAction = inAction as KnownAction; 
    switch (action.type) {
        case 'REQUEST_NEWS':
            return {...state};
        case 'RECIEVE_NEWS':
            return {...state,  news: action.news };
        case 'REQUEST_PROJECTS':
            return {...state};
        case 'RECIEVE_PROJECTS':
            return {...state, projects: action.projects };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { news: [], projects: [] };
};
