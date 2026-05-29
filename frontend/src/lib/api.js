import { BACKEND_URL } from './config';

/**
 * Request body keys must match backend PredictionInput (schema.py):
 * tyreLife, fuelLoad, compound (SOFT | MEDIUM | HARD).
 */
function buildPayload({ tyreLife, fuelLoad, compound }) {
  return {
    tyreLife: Number(tyreLife),
    fuelLoad: Number(fuelLoad),
    compound: String(compound).toUpperCase(),
  };
}

export async function fetchPrediction(params) {
  const payload = buildPayload(params);
  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const detail =
      data?.detail ??
      (typeof data?.error === 'string' ? data.error : null) ??
      response.statusText;
    throw new Error(`Backend error: ${response.status} — ${detail}`);
  }

  if (data == null) {
    throw new Error('Backend returned an empty response');
  }

  const lapDelta =
    typeof data === 'object' && data !== null && 'lapDelta' in data
      ? data.lapDelta
      : typeof data === 'number'
        ? data
        : Array.isArray(data)
          ? data[0]
          : Object.values(data)[0];

  const parsed = Number(lapDelta);
  if (Number.isNaN(parsed)) {
    throw new Error('Backend response did not include a numeric lapDelta');
  }

  return parseFloat(parsed.toFixed(3));
}
