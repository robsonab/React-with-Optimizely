import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { fetchData } from "./Utils/api";

const ComponentRouter = ({ pageId }) => {
  const Carousel = lazy(() => import("../Components/Blocks/Carousel/Carousel"));
  const [isLoading, setIsLoading] = useState(false);
  const hasFetched = useRef(false);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    // if (hasFetched.current) return;
    if (!pageId) return;
    setIsLoading(true);
    const fetchBlocks = async () => {
      try {
        const response = await fetchData("/PageContent/" + pageId);
        if (response) {
          setBlocks(response);
        }
      } catch (error) {
        throw new Error(error);
      }
      setIsLoading(false);
    };

    fetchBlocks();
    hasFetched.current = true;
  }, [pageId]);

  return (
    <>
      {isLoading && <div className="waiting">Loading...</div>}
      <Suspense fallback={<div className="waiting">Loading...</div>}>
        {blocks.map((block, index) =>
          block.type === "CarouselBlock" ? (
            <Carousel key={index} carouselId={block.id} />
          ) : (
            ""
          )
        )}
      </Suspense>
    </>
  );
};

export default ComponentRouter;
