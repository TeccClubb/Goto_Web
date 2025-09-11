import axios, { AxiosError } from "axios";
import { GET_LEGAL_NOTES_ROUTE } from "./constants";

type LegalNotes = {
  privacy_policy: string;
  tos: string;
};

export const fetchLegalNotes = async (): Promise<{
  status: boolean;
  message: string;
  legalNotes?: LegalNotes;
}> => {
  try {
    const res = await axios.get<LegalNotes>(GET_LEGAL_NOTES_ROUTE, {
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache", // Indicates that the response can be stored but must be revalidated before reuse.
        Pragma: "no-cache", // A legacy header, but still useful for older HTTP/1.0 caches.
        Expires: "0", // Instructs the client to consider the response stale immediately.
      },
    });
    if (res.status === 200) {
      return {
        status: true,
        message: "Legal Notes Fetched Successfully",
        legalNotes: res.data,
      };
    } else {
      return { status: false, message: "Failed to load legal notes" };
    }
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response
          ? error.response.data.message
          : error.message
        : error instanceof Error
        ? error.message
        : "Failed to load legal notes";
    return { status: false, message };
  }
};
