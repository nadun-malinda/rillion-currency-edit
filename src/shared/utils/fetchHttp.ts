type FetchHttpSuccess<T = unknown> = T;

/**
 * Sends an HTTP request using the Fetch API and returns the parsed JSON response or an error object.
 *
 * @template T - The expected type of the successful response. Defaults to `unknown`.
 * @param {RequestInfo | URL} input - The input, which can be a URL string or a Request object.
 * @param {RequestInit} [init] - Optional init configuration for the Fetch request, such as method, headers, and body.
 * @returns {Promise<T | Error>} A promise that resolves to the parsed JSON data of type `T` if the request is successful, or a `Error` object if an error occurs.
 */
export async function fetchHttp<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<FetchHttpSuccess<T> | Error> {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      return new Error("Error while fetching exchange rates");
    }

    // If successful, parse and return the JSON
    return (await response.json()) as T;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error;
    }

    return new Error("Error while fetching exchange rates");
  }
}
