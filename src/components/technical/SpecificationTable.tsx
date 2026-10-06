"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SpecificationRow } from "./SpecificationRow";
import { UnitSwitcher } from "./UnitSwitcher";
import {
  TemperatureUnit,
  PressureUnit,
  PumpingSpeedUnit,
  formatTemperature,
  formatPressure,
  formatPumpingSpeed,
} from "@/lib/conversions";

export interface SpecTableGroup {
  groupName: string;
  rows: Array<{
    parameter: string;
    unit?: string;
    valuesByModel: Record<string, string | number>;
    celsiusValue?: number;
    mbarValue?: number;
    m3hValue?: number;
    highlight?: boolean;
  }>;
}

export interface SpecificationTableProps extends React.HTMLAttributes<HTMLDivElement> {
  modelColumns: string[];
  groups: SpecTableGroup[];
  activeModel?: string;
  onModelSelect?: (model: string) => void;
  supportsTemperatureSwitch?: boolean;
  supportsPressureSwitch?: boolean;
  supportsPumpingSpeedSwitch?: boolean;
}

export function SpecificationTable({
  className,
  modelColumns,
  groups,
  activeModel,
  onModelSelect,
  supportsTemperatureSwitch = false,
  supportsPressureSwitch = false,
  supportsPumpingSpeedSwitch = false,
  ...props
}: SpecificationTableProps) {
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>("celsius");
  const [pressureUnit, setPressureUnit] = useState<PressureUnit>("mbar");
  const [pumpingUnit, setPumpingUnit] = useState<PumpingSpeedUnit>("m3h");

  return (
    <div className={cn("w-full flex flex-col gap-3", className)} {...props}>
      {/* Unit Switching Toolbar */}
      {(supportsTemperatureSwitch || supportsPressureSwitch || supportsPumpingSpeedSwitch) && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-50 border border-border-light rounded-md">
          <span className="text-xs font-sans font-medium text-ink-primary">
            Engineering Units:
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {supportsTemperatureSwitch && (
              <UnitSwitcher<TemperatureUnit>
                label="Temp"
                options={[
                  { id: "celsius", label: "°C" },
                  { id: "kelvin", label: "K" },
                ]}
                activeUnit={tempUnit}
                onUnitChange={setTempUnit}
              />
            )}
            {supportsPressureSwitch && (
              <UnitSwitcher<PressureUnit>
                label="Vacuum"
                options={[
                  { id: "mbar", label: "mbar" },
                  { id: "torr", label: "Torr" },
                  { id: "pa", label: "Pa" },
                ]}
                activeUnit={pressureUnit}
                onUnitChange={setPressureUnit}
              />
            )}
            {supportsPumpingSpeedSwitch && (
              <UnitSwitcher<PumpingSpeedUnit>
                label="Speed"
                options={[
                  { id: "m3h", label: "m³/h" },
                  { id: "ls", label: "L/s" },
                ]}
                activeUnit={pumpingUnit}
                onUnitChange={setPumpingUnit}
              />
            )}
          </div>
        </div>
      )}

      {/* Responsive Table Container */}
      <div className="overflow-x-auto border border-border-light rounded-md bg-surface-card shadow-xs">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-100 border-b border-border-light text-xs">
              <th
                scope="col"
                className="py-3 px-3 font-sans font-semibold text-ink-primary min-w-[200px] w-1/3"
              >
                Specification Parameter
              </th>
              {modelColumns.map((model) => {
                const isActive = activeModel === model;
                return (
                  <th
                    key={model}
                    scope="col"
                    onClick={() => onModelSelect?.(model)}
                    className={cn(
                      "py-3 px-3 font-mono font-bold text-ink-primary border-l border-border-light min-w-[140px] transition-colors",
                      isActive && "bg-brand-teal-tint/30 text-brand-teal border-l-brand-teal/50",
                      onModelSelect && "cursor-pointer hover:bg-slate-200/60"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span>{model}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <React.Fragment key={group.groupName}>
                <tr className="bg-slate-50/90 border-b border-border-light/80">
                  <td
                    colSpan={modelColumns.length + 1}
                    className="py-2 px-3 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-teal bg-slate-100/60"
                  >
                    {"// "}{group.groupName}
                  </td>
                </tr>
                {group.rows.map((row) => {
                  // Resolve converted values dynamically if present
                  let unit = row.unit;
                  const computedValuesByModel = { ...row.valuesByModel };

                  if (row.celsiusValue !== undefined) {
                    unit = tempUnit === "kelvin" ? "K" : "°C";
                    modelColumns.forEach((m) => {
                      if (typeof computedValuesByModel[m] === "number") {
                        computedValuesByModel[m] = formatTemperature(
                          computedValuesByModel[m] as number,
                          tempUnit
                        );
                      }
                    });
                  } else if (row.mbarValue !== undefined) {
                    unit = pressureUnit;
                    modelColumns.forEach((m) => {
                      if (typeof computedValuesByModel[m] === "number") {
                        computedValuesByModel[m] = formatPressure(
                          computedValuesByModel[m] as number,
                          pressureUnit
                        );
                      }
                    });
                  } else if (row.m3hValue !== undefined) {
                    unit = pumpingUnit === "ls" ? "L/s" : "m³/h";
                    modelColumns.forEach((m) => {
                      if (typeof computedValuesByModel[m] === "number") {
                        computedValuesByModel[m] = formatPumpingSpeed(
                          computedValuesByModel[m] as number,
                          pumpingUnit
                        );
                      }
                    });
                  }

                  return (
                    <SpecificationRow
                      key={row.parameter}
                      parameter={row.parameter}
                      unit={unit}
                      valuesByModel={computedValuesByModel}
                      modelColumns={modelColumns}
                      activeModel={activeModel}
                      highlight={row.highlight}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
