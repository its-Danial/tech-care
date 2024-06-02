"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DiagnosisHistory } from "@/lib/types";
import Image from "next/image";
import clsx from "clsx";

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
            beginAtZero: true,
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
    <div className="container flex space-x-8">
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
      <style jsx>{`
        .container {
          padding: 16px;
          max-width: 726px;
          height: 298px;
          background: #f4f0fe 0% 0% no-repeat padding-box;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}

type LevelOverview = {
  level: string;
  label: string;
  value: number;
};

function LevelOverview({ label, level, value }: LevelOverview) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-1">
        <span
          className={clsx(
            "h-[14px] w-[14px] rounded-full border border-solid border-[--unnamed-color-ffffff]",
            label === "Systolic" ? "bg-[#E66FD2]" : "bg-[#8C6FE6]",
          )}
        />
        <h3 className="overview-header">{label}</h3>
      </div>
      <span className="overview-num">{value}</span>
      <div className="flex space-x-2">
        <Image
          src={`/assets/icons/${label === "Systolic" ? "ArrowUp" : "ArrowDown"}.svg`}
          alt="arrow up"
          height="5"
          width="10"
        />
        <span className="overview-levels">{level} than Average</span>
      </div>
      <style jsx>{`
        .overview-header {
          font: var(--unnamed-font-style-normal) normal
            var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
            var(--unnamed-line-spacing-19) var(--unnamed-font-family-manrope);
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-072635);
          text-align: left;
          text-transform: capitalize;
        }
        .overview-num {
          font: var(--unnamed-font-style-normal) normal
            var(--unnamed-font-weight-bold) 22px/30px
            var(--unnamed-font-family-manrope);
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-072635);
          text-align: left;
          text-transform: capitalize;
          opacity: 1;
        }
        .overview-levels {
          font: var(--unnamed-font-style-normal) normal
            var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
            var(--unnamed-line-spacing-19) var(--unnamed-font-family-manrope);
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-072635);
          text-align: left;
        }
      `}</style>
    </div>
  );
}
