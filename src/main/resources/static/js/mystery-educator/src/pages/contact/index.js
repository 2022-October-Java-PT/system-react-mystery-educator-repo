import React from "react";
import style from './style.module.scss'
import profileNate from '../../assets/Profile-pic-nate.jpg';
import profileDonna from '../../assets/temporary-profile-pic.jpg';
import profilePrince from '../../assets/prince_photo.jpg';

const ContactPage = () => {
    return (
        <div className={style.contact_page}>
            {/* <h2>Meet the Devs</h2> */}
            <section className={style.profiles}>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>NATE CAMPBELL</h2>
                    <img src={profileNate} className={style.profile_img} alt="profile pic nate">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Nathan is an Aerospace Engineer currently enrolled in the WCCI coding bootcamp.  he plans to become a full stack developer within the technology industry utilizing his background in aerospace technology development to build a career creating software to further the industry</p>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>DONNA MAGBAG</h2>
                    <img src={profileDonna} className={style.profile_img} alt="profile pic donna">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>About Donna</p>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>PRINCE MOUTIMA</h2>
                    <img src={profilePrince} className={style.profile_img} alt="profile pic prince">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>About Prince</p>
                </article>
            </section>
        </div>
    );
};

export default ContactPage;