import type { AxiosError } from "axios";

export type ResponseType<D> = {
  status: boolean;
  message: string;
  data: D[];
};

export type ErrorResponseType = AxiosError<{
  status: boolean;
  message: string;
  error?: Record<string, string>;
}>;
