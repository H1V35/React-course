import React from "react";

const ERROR = {
  EMPTY: "Cannot do an empty search",
  LESS_THAN_THREE: "Cannot do search with less than three characters",
};

export function useSearch() {
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(null);
  const isFirstInput = React.useRef(true);

  React.useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError(ERROR.EMPTY);
      return;
    }

    if (search.length < 3) {
      setError(ERROR.LESS_THAN_THREE);
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
