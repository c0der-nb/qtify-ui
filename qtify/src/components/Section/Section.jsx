import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";

function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{key: 'all', label: 'All'}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  }

  useEffect(() => {
    if (filterSource) {
      filterSource().then(response => {
        const {data} = response;
        setFilters([...filters, ...data]);
      })
    }
  }, [])

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) => showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card);

  return (
    <div className={styles.section}>
      <div className={styles["album-section"]}>
        <div className={styles["album-heading"]}>
          <p>{title}</p>
          {type === 'album' && <button onClick={handleToggle} className={styles["btn-show-collapse"]}>{!carouselToggle ? "Collapse" : "Show All"}</button>}
        </div>
        {showFilters && 
          <div className={styles['filter-wrapper']}>
            <Filters
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>}
        <div className={styles["album-grid"]}>
          {!carouselToggle
            ? cardsToRender.map((album) => (
                <Card
                  data={album}
                  type={type}
                />
              ))
            :
              <Carousel 
                data={cardsToRender}
                renderComponent={(ele) => <Card data={ele} type={type}/>}
              />
            }
        </div>
      </div>
    </div>
  );
}

export default Section;
