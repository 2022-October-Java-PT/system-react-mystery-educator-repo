import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { useParams } from 'react-router-dom';

const InstrumentPage = () => {

    const { id } = useParams();
    const [instrument, setInstrument] = useState(null);
    const [loading, setLoading] = useState(true);

    const [hashtagState, setHashtagState] = useState({
        name: ""
    });

    useEffect(() => {
        const fetchInstrumentData = async () => {
            const result = await Axios(`http://localhost:8080/api/instruments/${id}`);
            setInstrument(result.data);
        }
        
        if (instrument) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !instrument && fetchInstrumentData();
        }, 250);

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [instrument]);

    const handleChange = (Event) => {
        const value = Event.target.value;
        setHashtagState({
            ...hashtagState,
            [Event.target.name]: value
        });
    }

    const handleSubmit = (Event) => {
        Event.preventDefault();

        const userData = {
            name: hashtagState.name
        }

        Axios.post(`http://localhost:8080/api/instruments/${id}/add-hashtag`, userData).then((Response) => {
            console.log(Response.status);
            console.log(Response.data);
            setInstrument(Response.data);
        })
    
        return (
            <div>
           
                {loading ? <h3>Loading...</h3> :
                    <div key={instrument.id}>
                        <h1>{instrument.instrumentName}</h1>
                        <p>{instrument.description}</p>
                        <h3>{instrument.famousArtist}</h3>
                        <h3>Musical Family: </h3>
                        {instrument.hashTags && instrument.hashTags.map(hashtag => (
                            <p>{hashtag.name}</p>
                        ))}
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='name'
                                value={hashtagState.name}
                                onChange={handleChange}
                                placeholder='Enter a musical family'
                            />
                            <button type='submit'>Add Hashtag</button>
                        </form>
                    </div>
                
                }
            </div>
        );
    }
}

export default InstrumentPage;