import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setPage } from "../redux/filterSlice";

import styles from "./SortBlock.module.scss";

const sortTitles = {
  desc: "более новые",
  asc: "более старые",
};

const SortBlock = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = useState(false);

  const onClickSort = (newSort) => {
    dispatch(setSort(newSort));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.sortLabel}>
        <b>Сортировать по:</b>
        <span className={styles.sortLabelName} onClick={() => setOpen(!open)}>
          {sortTitles[sort]}
        </span>
      </div>
      {open && (
        <div className={styles.sortPopup}>
          <ul>
            {Object.keys(sortTitles).map((key, i) => (
              <li
                key={i}
                onClick={() => {
                  setOpen(!open);
                  onClickSort(key);
                }}
              >
                {sortTitles[key]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBlock;
