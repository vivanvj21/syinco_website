import test from "node:test";
import assert from "node:assert/strict";
import {
  celsiusToKelvin,
  kelvinToCelsius,
  mbarToTorr,
  torrToMbar,
  mbarToPascal,
  pascalToMbar,
  m3hToLs,
  lsToM3h,
  formatTemperature,
  formatPressure,
  formatPumpingSpeed,
} from "../conversions";

test("Temperature Conversions: Celsius to Kelvin", () => {
  assert.equal(celsiusToKelvin(0), 273.15);
  assert.equal(celsiusToKelvin(100), 373.15);
  assert.equal(celsiusToKelvin(800), 1073.15);
  assert.equal(celsiusToKelvin(1000), 1273.15);
  assert.equal(celsiusToKelvin(-100), 173.15);
});

test("Temperature Conversions: Kelvin to Celsius", () => {
  assert.equal(kelvinToCelsius(273.15), 0);
  assert.equal(kelvinToCelsius(373.15), 100);
  assert.equal(kelvinToCelsius(1273.15), 1000);
});

test("Temperature Formatting", () => {
  assert.equal(formatTemperature(1000, "celsius"), "1000 °C");
  assert.equal(formatTemperature(1000, "kelvin"), "1273.15 K");
});

test("Vacuum Pressure Conversions: mbar to Torr", () => {
  // Edwards nXDS ultimate vacuum is 0.007 mbar
  const torrVal = mbarToTorr(0.007);
  assert.equal(torrVal, 0.00525);

  // Atmospheric pressure 1013.25 mbar
  assert.equal(Math.round(mbarToTorr(1013.25)), 760);
});

test("Vacuum Pressure Conversions: Torr to mbar", () => {
  assert.equal(Math.round(torrToMbar(760)), 1013);
});

test("Vacuum Pressure Conversions: mbar to Pascal", () => {
  assert.equal(mbarToPascal(1), 100);
  assert.equal(mbarToPascal(0.007), 0.7);
  assert.equal(pascalToMbar(100), 1);
});

test("Pressure Formatting", () => {
  assert.equal(formatPressure(0.007, "mbar"), "0.007 mbar");
  assert.equal(formatPressure(0.007, "torr"), "0.00525 Torr");
  assert.equal(formatPressure(0.007, "pa"), "0.7 Pa");
});

test("Pumping Speed Conversions: m³/h to L/s", () => {
  // Edwards nXDS15i has 15.1 m³/h speed
  assert.equal(m3hToLs(15.1), 4.2);
  assert.equal(lsToM3h(4.2), 15.1);

  // 36 m³/h = 10 L/s
  assert.equal(m3hToLs(36), 10);
  assert.equal(lsToM3h(10), 36);
});

test("Pumping Speed Formatting", () => {
  assert.equal(formatPumpingSpeed(15.1, "m3h"), "15.1 m³/h");
  assert.equal(formatPumpingSpeed(15.1, "ls"), "4.2 L/s");
});
