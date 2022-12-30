export function saveCountries(data) {
    return {
      type: 'COUNTRIES_FETCH_COMPLETED',
      payload: data
    };
}