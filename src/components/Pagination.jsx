import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/filterSlice";

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
        prev
      </button>
      <p className={styles.page}>
        {page} / {totalPages}
      </p>
      <button
        className={styles.button}
        disabled={!hasNextPage}
        onClick={() => dispatch(setPage(data.nextPage))}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
