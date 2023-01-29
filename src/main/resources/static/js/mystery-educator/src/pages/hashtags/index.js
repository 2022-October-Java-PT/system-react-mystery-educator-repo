import React, {useEffect, useState} from "react";

import Axios from 'axios';

const HashTagsPage = () => {
    const [hashtags, setHashtags] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchHashtagsData = async () => {
            const result = await Axios('http://localhost:8080/api/hashtags');
            setHashtags(result.data);
        }

        if(hashtags) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !hashtags && fetchHashtagsData();
        }, 1000);

        return () => clearTimeout(timer);

    }, [hashtags]);

    return (
        <div>
            <h2>Hashtags</h2>
            {/* <div className={style.instrument_icons}> 
                <span>
                    <a href="/instruments/1"><img src={guitar} className={style.icon_img} alt="guitar"></img></a>
                </span>
                <span>
                    <a href="/instruments/2"><img src={piano} className={style.icon_img2} alt="piano"></img></a>
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
            </div> */}
        
            {/* {loading ? <h3>Loading...</h3> : hashtags.map(hashtag => (
            
            <p>{hashtag.name}</p>
              
            ))} */}

                {loading ? <h3>Loading...</h3> : hashtags.map(hashtag => (
                <a key={hashtag.id} href={`hashtags/${hashtag.id}`}>
                    <p>{hashtag.name}</p>
                </a>
            ))}
    
        </div>
        
    );
}

export default HashTagsPage;