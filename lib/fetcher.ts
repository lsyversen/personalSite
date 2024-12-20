export default async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`);
  }

  return res.json() as JSON;
}
