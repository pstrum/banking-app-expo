export class ApiService {
  constructor() {}

  async request<T>(path: string, options?: any): Promise<T> {
    return await fetch(path, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      })
      .catch((error) => {
        throw error;
      });
  }

  protected async get<T>(path: string, options?: any): Promise<T> {
    return await this.request(path, options);
  }

  protected async post<T>(path: string, options?: any): Promise<T> {
    return await this.request(path, { method: 'POST', ...options });
  }
}
