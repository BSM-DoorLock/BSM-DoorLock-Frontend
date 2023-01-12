import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { StudentRankingType } from "../../types/main.type";
import { useEffect, useState } from "react";
import { GraphStudentRankingType } from "./graph.type";
import { init } from "./util";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StudentGraph({ data }: { data: StudentRankingType[] }) {
    const [studentRanking, setStudentRanking] = useState<GraphStudentRankingType>(init)

    useEffect(()=>{
        const studentLabelsArr: string[] = [];
        const studentDatasetsArr: number[] = [];

        data.forEach((value: StudentRankingType) => {
          if(value.totalSharedRooms > 0) {
              studentLabelsArr.push(value.student.name);
              studentDatasetsArr.push(value.totalSharedRooms);
          }
      })

      setStudentRanking((prev) => ({
          ...prev,
          labels: studentLabelsArr,
          datasets: studentDatasetsArr,
      }))
    }, [])

  const testData = {
    labels: studentRanking.labels,
    datasets: [
      {
        data: studentRanking.datasets,
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