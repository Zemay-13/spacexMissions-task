import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/filterSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import styles from "./Pagination.module.scss";

const Pagination = ({ totalPages, hasPrevPage, hasNextPage, data }) => {
  const page = useSelector((state) => state.filter.page);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrevPage}
        onClick={() => dispatch(setPage(data.prevPage))}
      >
        <AiOutlineArrowLeft className={styles.arrow} />
      </button>
      <p className={styles.page}>
        {page} / {totalPages}
      </p>
      <button
        className={styles.button}
        disabled={!hasNextPage}
        onClick={() => dispatch(setPage(data.nextPage))}
      >
        <AiOutlineArrowRight className={styles.arrow} />
      </button>
    </div>
  );
};

export default Pagination;
