import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

function useLocationSearch() {
  const location = useLocation();
  const locationSearch = React.useMemo(() => qs.parse(location.search), [location.search]);

  return locationSearch;
}

export default useLocationSearch;
