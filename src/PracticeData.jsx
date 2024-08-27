import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryDisplay, statesDisplay } from "./Redux/Countries/countrySlice";

const PracticeData = () => {
  const { countries } = useSelector((state) => state.country);

  console.log(countries, "countriesInfo");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statesDisplay())
    // dispatch(countryDisplay());
  }, []);

  return (
    <div>
      <button onClick={() => console.log(countries, "countries Data")}>
        show countries
      </button>
      <select>
        {countries.map((item) => {
          return (
            <>
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};

export default PracticeData;
