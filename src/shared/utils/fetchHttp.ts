type FetchHttpError = {
  success: false;
  message: string;
  status: number | null; // Keep status as `number | null` in case it's not available
};

type FetchHttpSuccess<T = unknown> = T;

/**
 * Sends an HTTP request using the Fetch API and returns the parsed JSON response or an error object.
 *
 * @template T - The expected type of the successful response. Defaults to `unknown`.
 * @param {RequestInfo | URL} input - The input, which can be a URL string or a Request object.
 * @param {RequestInit} [init] - Optional init configuration for the Fetch request, such as method, headers, and body.
 * @returns {Promise<T | FetchHttpError>} A promise that resolves to the parsed JSON data of type `T` if the request is successful, or a `FetchHttpError` object if an error occurs.
 */
export async function fetchHttp<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<FetchHttpSuccess<T> | FetchHttpError> {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      // If response is not okay, throw an error with status
      return {
        success: false,
        message: `HTTP error! status: ${response.status}`,
        status: response.status,
      };
    }

    // If successful, parse and return the JSON
    return (await response.json()) as T;
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "An error occurred",
      status: null, // If no status code available, return null
    };
  }
}
