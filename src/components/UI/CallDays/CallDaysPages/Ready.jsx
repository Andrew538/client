import React, { useContext, useState } from "react";

import { Context } from "../../../..";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { fetchDeliveryRedy } from "../../../http/mapApi";
import TableReady from "../../Directions/TableReady/TableReady";
import Loader from "../../Loader/Loader";

const Ready = observer(() => {
  const { ready, totalweghtnewofcity } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await fetchDeliveryRedy().then((data) => {
          ready.SetReady(data);
          console.log(data);
        });

        //  fetchAllTotal(  '11.09.2025, 13.09.2025', 7).then((data) => {
        //                 console.log(data)
        //           totalweghtnewofcity.SetTotalWeghtNewOfCity(data)
        //         })
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [ready]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <TableReady ready={ready} totalweghtnewofcity={totalweghtnewofcity} />
    </div>
  );
});

export default Ready;
