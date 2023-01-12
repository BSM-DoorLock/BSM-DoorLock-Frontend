import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { RoomRankingType } from "../../types/main.type";
import { useEffect, useState } from "react";
import { GraphRoomRankingType } from "./graph.type";
import { init } from "./util";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RoomGraph({ data }: { data: RoomRankingType[] }) {
     const [roomRanking, setRoomRanking] = useState<GraphRoomRankingType>(init);

    useEffect(()=>{
        const roomLabelsArr: number[] = [];
        const roomDatasetsArr: number[] = [];

        data.forEach((value: RoomRankingType) => {
          if (value.totalGuests > 0) {
            roomLabelsArr.push(value.id);
            roomDatasetsArr.push(value.totalGuests);
          }
        });

        roomDatasetsArr.sort((a, b) => b - a);
        roomLabelsArr.sort((a, b) => b - a);

        setRoomRanking((prev) => ({
          ...prev,
          labels: roomLabelsArr,
          datasets: roomDatasetsArr,
        }))
    }, [])

  const testData = {
    labels: roomRanking.labels,
    datasets: [
      {
        data: roomRanking.datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={testData} />
    </div>
  );
}