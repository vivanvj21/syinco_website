/**
 * SYINCO TECHNOLOGIES — Deterministic Unit Conversion Utilities
 * Used across the technical specification tables, metric displays,
 * and parametric filter facets.
 *
 * All formulas are mathematically exact and rounded deterministically
 * to prevent floating-point drift and Cumulative Layout Shift (CLS).
 */

// ============================================================================
// TEMPERATURE CONVERSIONS
// ============================================================================

export type TemperatureUnit = 'celsius' | 'kelvin';

/**
 * Converts Celsius to Kelvin: K = °C + 273.15
 */
export function celsiusToKelvin(celsius: number): number {
  return Math.round((celsius + 273.15) * 100) / 100;
}

/**
 * Converts Kelvin to Celsius: °C = K - 273.15
 */
export function kelvinToCelsius(kelvin: number): number {
  return Math.round((kelvin - 273.15) * 100) / 100;
}

/**
 * Formats a temperature value based on the requested unit.
 */
export function formatTemperature(celsiusValue: number, unit: TemperatureUnit): string {
  if (unit === 'kelvin') {
    return `${celsiusToKelvin(celsiusValue)} K`;
  }
  return `${celsiusValue} °C`;
}

// ============================================================================
// PRESSURE CONVERSIONS (mbar ↔ Torr ↔ Pa)
// ============================================================================

export type PressureUnit = 'mbar' | 'torr' | 'pa';

const MBAR_TO_TORR_FACTOR = 0.750061683;

/**
 * Converts mbar to Torr: Torr = mbar * 0.750062
 */
export function mbarToTorr(mbar: number): number {
  if (mbar < 0.01) {
    // Preserve scientific precision for high/ultra-high vacuum
    return parseFloat((mbar * MBAR_TO_TORR_FACTOR).toPrecision(3));
  }
  return Math.round(mbar * MBAR_TO_TORR_FACTOR * 1000) / 1000;
}

/**
 * Converts Torr to mbar: mbar = Torr / 0.750062
 */
export function torrToMbar(torr: number): number {
  if (torr < 0.01) {
    return parseFloat((torr / MBAR_TO_TORR_FACTOR).toPrecision(3));
  }
  return Math.round((torr / MBAR_TO_TORR_FACTOR) * 1000) / 1000;
}

/**
 * Converts mbar to Pascal: Pa = mbar * 100
 */
export function mbarToPascal(mbar: number): number {
  return Math.round(mbar * 100 * 100) / 100;
}

/**
 * Converts Pascal to mbar: mbar = Pa / 100
 */
export function pascalToMbar(pa: number): number {
  return Math.round((pa / 100) * 1000) / 1000;
}

/**
 * Formats a vacuum pressure value with appropriate unit and scientific notation where needed.
 */
export function formatPressure(mbarValue: number, unit: PressureUnit): string {
  if (unit === 'torr') {
    const val = mbarToTorr(mbarValue);
    return `${val} Torr`;
  }
  if (unit === 'pa') {
    const val = mbarToPascal(mbarValue);
    return `${val} Pa`;
  }
  return `${mbarValue} mbar`;
}

// ============================================================================
// PUMPING SPEED CONVERSIONS (m³/h ↔ L/s)
// ============================================================================

export type PumpingSpeedUnit = 'm3h' | 'ls';

/**
 * Converts m³/h to L/s: L/s = (m³/h * 1000) / 3600 = m³/h / 3.6
 */
export function m3hToLs(m3h: number): number {
  return Math.round((m3h / 3.6) * 10) / 10;
}

/**
 * Converts L/s to m³/h: m³/h = L/s * 3.6
 */
export function lsToM3h(ls: number): number {
  return Math.round(ls * 3.6 * 10) / 10;
}

/**
 * Formats a volumetric pumping speed based on the requested unit.
 */
export function formatPumpingSpeed(m3hValue: number, unit: PumpingSpeedUnit): string {
  if (unit === 'ls') {
    return `${m3hToLs(m3hValue)} L/s`;
  }
  return `${m3hValue} m³/h`;
}
