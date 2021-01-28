import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {
  const [acriveItem, setAcriveItem] = useState(null);

  const onSelectItem = (index) => {
    setAcriveItem(index);
  }

  return (
    <div className="categories">
      <ul>
        <li 
          className={acriveItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li 
              className={acriveItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`} >
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;