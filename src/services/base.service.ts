export type BaseServiceOptions = { baseURL?: string; headers?: Record<string, string> };

export type FetchJsonOptions = {
    parseResponse?: boolean
} & RequestInit

export type RequestConfig = Omit<RequestInit, 'method' | 'body'>;

export class BaseService {

    private _baseURL: string;
    private _headers: Record<string, string>;

    constructor(options: BaseServiceOptions) {
        this._baseURL = options.baseURL || '';
        this._headers = options.headers || {};
    }

    private _fetchJSON = async (endpoint: string, options: FetchJsonOptions = {}) => {
        const res = await fetch(this._baseURL + endpoint, {
            ...options,
            headers: this._headers
        });

        if (!res.ok) throw new Error(res.statusText);

        if (options.parseResponse !== false && res.status !== 204)
            return res.json();

        return undefined;
    };

    public setBasicAuth = (token: string): BaseService => {
        this._headers.Authorization = `${token}`;
        return this;
    };

    public setHeader = (key: string, value: string): BaseService => {
        this._headers[key] = value;
        return this;
    };

    public get = <T>(endpoint: string, options: RequestConfig = {}): Promise<T> => {
        return this._fetchJSON(endpoint, {
            ...options,
            method: 'GET'
        });
    };

    public post = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
        const isFormData = body instanceof FormData;
        return this._fetchJSON(endpoint, {
            ...options,
            body: isFormData ? body : JSON.stringify(body),
            method: 'POST'
        });
    };

    public patch = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
        const isFormData = body instanceof FormData;
        return this._fetchJSON(endpoint, {
            ...options,
            body: isFormData ? body : JSON.stringify(body),
            method: 'PATCH'
        });
    };

    public put = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
        const isFormData = body instanceof FormData;
        return this._fetchJSON(endpoint, {
            ...options,
            body: isFormData ? body : JSON.stringify(body),
            method: 'PUT'
        });
    };

    public delete = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
        const isFormData = body instanceof FormData;
        return this._fetchJSON(endpoint, {
            ...options,
            body: isFormData ? body : JSON.stringify(body),
            method: 'DELETE'
        });
    };
}

export const api = new BaseService({
    baseURL: `${process.env.API_URL}/v1`,
    headers: {
        'Content-Type': 'application\json',
        'Accept': 'application\json'
    }
});