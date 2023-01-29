import React, {useEffect, useState} from "react";

import Axios from 'axios';
import drums from '../../assets/drums.png';
import flute from '../../assets/flute.png';
import guitar from '../../assets/acoustic-guitar.png';
import piano from '../../assets/piano.png';
import style from './style.module.scss'
import violin from '../../assets/violin.png';

const InstrumentsPage = () => {

    const [instruments, setInstruments] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchInstrumentsData = async () => {
            const result = await Axios('http://localhost:8080/api/instruments');
            setInstruments(result.data);
        }

        if(instruments) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !instruments && fetchInstrumentsData();
        }, 1000);

        return () => clearTimeout(timer);

    }, [instruments]);

    return (
        <div>
            <h2>Our Instruments Page</h2>
            <div className={style.instrument_icons}> 
                <span>
                    <a href="/instruments/1"><img src={guitar} className={style.icon_img} alt="guitar"></img></a>
                </span>
                <span>
                    <a href="/instruments/5"><img src={piano} className={style.icon_img2} alt="piano"></img></a>
                </span>
                <span>
                    <a href="/instruments/3"><img src={violin} className={style.icon_img3} alt="violin"></img></a>
                </span>
                <span>
                    <a href="/instruments/4"><img src={drums} className={style.icon_img4} alt="drums"></img></a>
                </span>
                <span>
                    <a href="/instruments/5"><img src={flute} className={style.icon_img5} alt="flute"></img></a>
                </span>
            </div>
        
            {loading ? <h3>Loading...</h3> : instruments.map(instrument => (
                <a key={instrument.id} href={`instruments/${instrument.id}`}>
                    <p>{instrument.instrumentName}</p>
                </a>
            ))}
    
        </div>
        
    );
}

export default InstrumentsPage;



