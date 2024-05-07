/*
A wrapper for the SearchBar component to be used in a toolbar.
*/
import React from "react";
import SearchBar from "./SearchBar";
import useFilmQuery from "../routes/film/hooks/useFilmQuery";
import {
  FilmResponseInterface,
  FilmResultInterface,
} from "../routes/film/utils/interface";
import { useLocation, useSearchParams } from "react-router-dom";
import FILM_ENDPOINTS from "../routes/film/utils/endpoints";

const ToolBarSearch: React.FC = () => {
  const [queryText, setQueryText] = React.useState<string>("");
  const { data, isLoading, error } = useFilmQuery({ searchQuery: queryText });
  const [filmPreviewList, setFilmPreviewList] = React.useState<Array<string>>(
    []
  );
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {}, [queryText]);

  React.useEffect(() => {
    if (data) {
      const returnArray: string[] = [];
      (data as FilmResponseInterface).data?.results?.map((film) =>
        returnArray.push(film.title.toLowerCase())
      );
      const uniqueArray = [...new Set(returnArray)];
      setFilmPreviewList(uniqueArray);
    }
  }, [data]);

  const handleTextChanged = (newQueryString: string) => {
    setQueryText(newQueryString);
  };

  const handleOnSubmit = (completedQueryString: string) => {
    setQueryText(completedQueryString);
    const isFilmPage = location.pathname.includes(FILM_ENDPOINTS.films);
    // let params = serializeFormQuery(completedQueryString);
    setSearchParams({ "film-query": completedQueryString });
  };

  return (
    <SearchBar
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleTextChanged}
      optionList={filmPreviewList}
      loading={isLoading}
      sx={{ width: "50%" }}
    />
  );
};

export default ToolBarSearch;
