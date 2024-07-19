import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../Components/Utils/api";
import "./home.scss";
import ComponentRouter from "../Components/ComponentRouter";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [page, setPage] = useState(null);
  const hasFetched = useRef(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (hasFetched.current) return;
    console.log("Fetch");
    if (!params.pageName) return;
    setIsLoading(true);

    const encodedParam = encodeURIComponent(
      params.lang + "/" + params.pageName
    );

    const fetchPage = async () => {
      try {
        const response = await fetchData(
          "/PageContent/PageByPath/" + encodedParam
        );
        if (response) {
          setPage(response);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
    hasFetched.current = true;
  }, [params]);

  return (
    <>
      {isLoading && <div className="waiting">Loading...</div>}
      {page && !isLoading && <ComponentRouter pageId={page.id} />}
    </>
  );
};

export default HomePage;
