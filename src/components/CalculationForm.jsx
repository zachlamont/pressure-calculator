import React, { useState, useEffect } from "react";

const CalculationForm = () => {
  // INPUTS:
  const [averageDailyMinAtCPP, setAverageDailyMinAtCPP] = useState(30);
  const [elevationAtCPP, setElevationAtCPP] = useState(30);
  const [elevationAtMeter, setElevationAtMeter] = useState(20); // Added elevation at meter input

  // OUTPUTS:
  const [outputAverageDailyMinAtCPPInHGL, setOutputAverageDailyMinAtCPPInHGL] =
    useState(0);
  const [
    outputExpectedPressureAtMeterInHGL,
    setOutputExpectedPressureAtMeterInHGL,
  ] = useState(0);
  const [
    outputExpectedPressureAtMeterInKpA,
    setOutputExpectedPressureAtMeterInKpA,
  ] = useState(0);

  // EVENT HANDLERS:
  const handleAverageDailyMinAtCPPChange = (e) => {
    setAverageDailyMinAtCPP(Number(e.target.value));
  };

  const handleElevationAtCPPChange = (e) => {
    setElevationAtCPP(Number(e.target.value));
  };

  const handleElevationAtMeterChange = (e) => {
    setElevationAtMeter(Number(e.target.value));
  };

  useEffect(() => {
    const calculateOutputs = () => {
      // CALCULATION STEPS
      // STEP 1: Calculate average daily minimum pressure at CP1 in HGL
      const averageDailyMinAtCPPInHGL = averageDailyMinAtCPP + elevationAtCPP;
      setOutputAverageDailyMinAtCPPInHGL(averageDailyMinAtCPPInHGL);

      // STEP 2: Calculate expected pressure at the meter in HGL
      const expectedPressureAtMeterInHGL =
        averageDailyMinAtCPPInHGL - elevationAtMeter;
      setOutputExpectedPressureAtMeterInHGL(expectedPressureAtMeterInHGL);

      // STEP 3: Calculate expected pressure at the meter in kPa
      const expectedPressureAtMeterInKpA = expectedPressureAtMeterInHGL * 10;
      setOutputExpectedPressureAtMeterInKpA(expectedPressureAtMeterInKpA);
    };

    calculateOutputs(); // Call the calculation function initially
  }, [averageDailyMinAtCPP, elevationAtCPP, elevationAtMeter]);

  return (
    <div className="app-container">
      <div className="form-container">
        <form className="form">
          <label>
            Average Minimum Pressure at CPP (m):
            <input
              type="number"
              value={averageDailyMinAtCPP}
              onChange={handleAverageDailyMinAtCPPChange}
            />
          </label>
          <label>
            Elevation at CPP (m):
            <input
              type="number"
              value={elevationAtCPP}
              onChange={handleElevationAtCPPChange}
            />
          </label>
          <label>
            Elevation at Meter (m):
            <input
              type="number"
              value={elevationAtMeter}
              onChange={handleElevationAtMeterChange}
            />
          </label>

          <div className="outputs-container">
            <div className="outputs-section">
              <h3>Average Minimum Pressure at CPP:</h3>
              <div className="card">
                <div className="output">
                  {outputAverageDailyMinAtCPPInHGL.toFixed(1)} HGL
                </div>
              </div>
            </div>

            <div className="outputs-section">
              <h3>Expected Pressure at meter:</h3>

              <div className="card">
                <div className="output">
                  {outputExpectedPressureAtMeterInHGL.toFixed(1)} HGL
                  <br></br>
                  {outputExpectedPressureAtMeterInKpA.toFixed(1)} kPa
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalculationForm;
