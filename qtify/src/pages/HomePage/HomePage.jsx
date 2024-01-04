import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";
import Hero from  "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../api/api";

function HomePage() {
    const { data } = useOutletContext();
    const { topAlbums, newAlbums, songs } = data;

    return (
        <>
            <Hero />
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <div className={styles.divider}></div>
                <Section 
                    title="Songs" 
                    data={songs} 
                    filterSource={fetchFilters}
                    type="song" 
                />
            </div>
        </>
    )
}

export default HomePage;