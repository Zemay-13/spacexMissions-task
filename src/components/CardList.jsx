import { useGetLaunchesQuery } from "../redux/apiSlice";
import { useSelector } from "react-redux";

import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import Pagination from "./Pagination";
import SortBlock from "./SortBlock";

import styles from "./CardList.module.scss";

const CardList = () => {
  const sort = useSelector((state) => state.filter.sort);
  const page = useSelector((state) => state.filter.page);

  const { data, isLoading } = useGetLaunchesQuery({
    sort,
    page,
    limit: 6,
  });

  const skeletons = [...new Array(6)].map((_, index) => (
    <SkeletonCard key={index} />
  ));

  const cards = data?.docs.map((card, index) => (
    <Card
      key={index}
      title={card.name}
      date={card.date_utc}
      details={card.details}
      image={card.links.flickr.original[0]}
    />
  ));

  return (
    <>
      <SortBlock />
      <div className={styles.container}>{isLoading ? skeletons : cards}</div>
      {data && (
        <Pagination
          totalPages={data.totalPages}
          hasPrevPage={data.hasPrevPage}
          hasNextPage={data.hasNextPage}
          data={data}
        />
      )}
    </>
  );
};

export default CardList;
