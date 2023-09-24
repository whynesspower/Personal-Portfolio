import React, { useEffect, useState } from "react";
import { items } from "./ListOfTechStack";
import Image from "next/image";
// import "./style.module.css";
// const myImage = require("/image1.png");
// import image1 from "./Assets/image1.png";
import styles from "../../styles/Home.module.scss";
import RowCard from "../Card/RowCard";
import MediaCard from "../Card/MediaCard";

export default function TechStack() {
  const [selectedFilters, setSelectedFilters] = useState([
    "Data Structures and Algorithms",
  ]);
  const [filteredItems, setFilteredItems] = useState([]);

  let filters = [
    "Data Structures and Algorithms",
    "Backend",
    "Generative AI",
    "Frontend",
    "Web 3",
    "Open Source",
    "Core C++ Projects",
    // "Mobile Development",
    "Machine Learning",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      // let filters = selectedFilters.filter((el) => el !== selectedCategory);
      // setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = items.filter((item) =>
        item.category.some((category) => selectedFilters.includes(category))
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <>
      <div className={styles.buttons1Container}>
        {filters.map((category, idx) => (
          <>
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`${styles.button1} ${
                selectedFilters?.includes(category) ? styles.active1 : ""
              }`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          </>
        ))}
      </div>

      <div className={styles.items1Container}>
        {/* {filteredItems.map((item, idx) => (
          <MediaCard
            key={`item-${idx}`}
            title={item.name}
            paragraph=""
            imageSrc={image1}
            link={item.link}
          />
        ))} */}

        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className={styles.item1}>
            <a
              href={item.link}
              target="blank"
              styles={{
                textDecoration: "none",
                borderBottom: "0",
              }}
            >
              <Image src={item.img} width={400} height={180} alt="My Image" />

              <p>{item.name}</p>

              <p className={styles.category1}>
                {item.category.map((categoryWord, index) => (
                  <span key={`category-word-${index}`}>
                    {index > 0 && ", "}
                    {categoryWord}
                  </span>
                ))}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
