'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fetchPrediction } from '../lib/api';
import { APP_CONFIG } from '../lib/config';

export function usePrediction() {
  const [tyreLife, setTyreLife] = useState(APP_CONFIG.SLIDERS.TYRE_LIFE.default);
  const [fuelLoad, setFuelLoad] = useState(APP_CONFIG.SLIDERS.FUEL_LOAD.default);
  const [compound, setCompound] = useState(APP_CONFIG.COMPOUNDS[0].name);
  const [predictedDelta, setPredictedDelta] = useState(0.0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [latencyMs, setLatencyMs] = useState(0);

  const debounceRef = useRef(null);
  const requestIdRef = useRef(0);

  const severity = useMemo(() => {
    if (predictedDelta < APP_CONFIG.THRESHOLDS.OPTIMAL_MAX) return 'OPTIMAL';
    if (predictedDelta < APP_CONFIG.THRESHOLDS.DEGRADING_MAX) return 'DEGRADING';
    return 'CRITICAL';
  }, [predictedDelta]);

  const severityColor = useMemo(() => {
    if (severity === 'OPTIMAL') return '#059669';
    if (severity === 'DEGRADING') return '#d97706';
    return '#dc2626';
  }, [severity]);

  const stintPhase = useMemo(() => {
    if (tyreLife <= 15) return 'PUSH PHASE';
    if (tyreLife <= 40) return 'NOMINAL';
    return 'LATE STINT';
  }, [tyreLife]);

  const fuelPhase = useMemo(() => {
    if (fuelLoad >= 80) return 'HEAVY';
    if (fuelLoad >= 40) return 'MID';
    return 'LIGHT';
  }, [fuelLoad]);

  const interactionIndex = useMemo(
    () => (fuelLoad > 0 ? (tyreLife / (fuelLoad + 1)).toFixed(3) : '0.000'),
    [tyreLife, fuelLoad]
  );

  const refreshPrediction = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    setIsLoading(true);
    setIsError(false);
    const start = performance.now();

    try {
      const delta = await fetchPrediction({ tyreLife, fuelLoad, compound });
      if (requestId !== requestIdRef.current) return;
      setPredictedDelta(delta);
      setLatencyMs(Math.round(performance.now() - start));
      setIsLoading(false);
    } catch (error) {
      if (requestId !== requestIdRef.current) return;
      setIsError(true);
      setIsLoading(false);
      setLatencyMs(Math.round(performance.now() - start));
    }
  }, [tyreLife, fuelLoad, compound]);

  useEffect(() => {
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }
    debounceRef.current = window.setTimeout(refreshPrediction, APP_CONFIG.DEBOUNCE_MS);
    return () => window.clearTimeout(debounceRef.current);
  }, [refreshPrediction]);

  const handleTyreLifeChange = useCallback((value) => {
    setTyreLife(Number(value));
  }, []);

  const handleFuelLoadChange = useCallback((value) => {
    setFuelLoad(Number(value));
  }, []);

  const handleCompoundChange = useCallback((value) => {
    setCompound(value);
  }, []);

  return {
    tyreLife,
    fuelLoad,
    compound,
    predictedDelta,
    isLoading,
    isError,
    latencyMs,
    handleTyreLifeChange,
    handleFuelLoadChange,
    handleCompoundChange,
    severity,
    severityColor,
    stintPhase,
    fuelPhase,
    interactionIndex,
  };
}
