import { BASE_API_URL } from "@global";

interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string | null;
}

class ApiClient {
  private baseURL: string;
  private headers: Record<string, string>;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async makeRequest<T>(endpoint: string, method = "GET", body?: RequestOptions["body"]): Promise<T> {
    const url = `${this.baseURL}/${endpoint}`;

    const requestOptions: RequestOptions = {
      method,
      headers: {
        ...this.headers,
        "Content-Type": "application/json",
      },
    };

    if (body) {
      requestOptions.body = body;
    }

    try {
      const response = await fetch(url, requestOptions);

      const data = await response.json();

      if (!response.ok) {
        console.error('Request failed with error:', data.message);
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      const errorMessage = `Failed to perform request: ${error instanceof Error ? error.message : 'Unknown error occurred'}`;
      throw new Error(errorMessage);
    }
  }
}

export const queryBuilder = new ApiClient(BASE_API_URL);
