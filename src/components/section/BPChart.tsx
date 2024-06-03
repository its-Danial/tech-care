"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DiagnosisHistory } from "@/lib/types";
import Image from "next/image";
import LevelOverview from "@/components/ui/card/LevelOverview";

type BPChartProps = {
  diagnosisHistory: DiagnosisHistory[];
};

export default function BPChart({ diagnosisHistory }: BPChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!diagnosisHistory || !chartRef.current) return;

    const lastSixMonthsData = diagnosisHistory.slice(-6);
    const months = lastSixMonthsData.map(
      (entry) => entry.month.substring(0, 3) + ", " + entry.year,
    );

    const systolicValues = diagnosisHistory.map(
      (entry) => entry.blood_pressure.systolic.value,
    );
    const diastolicValues = diagnosisHistory.map(
      (entry) => entry.blood_pressure.diastolic.value,
    );

    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx as CanvasRenderingContext2D, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: "Systolic",
            data: systolicValues,
            borderColor: "#C26EB4",
            borderWidth: 2,
            tension: 0.4,
            pointStyle: "circle",
            pointRadius: 7,
            pointBorderWidth: 1,
            pointBackgroundColor: "#C26EB4",
            pointBorderColor: "#FFFFFF",
          },
          {
            label: "Diastolic",
            data: diastolicValues,
            borderColor: "#7E6CAB",
            borderWidth: 2,
            tension: 0.4,
            pointStyle: "circle",
            pointRadius: 7,
            pointBorderWidth: 1,
            pointBackgroundColor: "#7E6CAB",
            pointBorderColor: "#FFFFFF",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            grid: {
              color: "#CBC8D4",
            },
            ticks: {
              // @ts-ignore
              font: "normal normal normal 12px/17px Manrope",
              textStrokeColor: "#072635",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              // @ts-ignore
              font: "normal normal normal 12px/17px Manrope",
              textStrokeColor: "#072635",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [diagnosisHistory]);

  return (
    <div className="flex h-[298px] max-w-[726px] space-x-8 rounded-xl bg-[#f4f0fe] p-4">
      <div className="flex-1">
        <div className="flex items-start justify-between pr-8">
          <h1 className="inner-card-title-18pt mb-5">Blood Pressure</h1>
          <div className="flex space-x-4">
            <span className="body-regular-14">Last 6 months</span>
            <Image
              src="/assets/icons/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
              alt="down arrow"
              height="6"
              width="11"
            />
          </div>
        </div>
        <canvas ref={chartRef} />
      </div>

      <div className="h-[201px] w-[208px]">
        <LevelOverview label="Systolic" level="Higher" value={160} />
        <div className="my-4 h-px w-full bg-[--unnamed-color-cbc8d4]" />
        <LevelOverview label="Diastolic" level="Lower" value={78} />
      </div>
    </div>
  );
}
