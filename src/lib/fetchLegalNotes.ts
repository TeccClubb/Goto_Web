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
    const res = await fetch(GET_LEGAL_NOTES_ROUTE, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-cache",
    });

    const data = await res.json();

    if (res.status === 200) {
      return {
        status: true,
        message: "Legal Notes Fetched Successfully",
        legalNotes: data,
      };
    } else {
      return { status: false, message: "Failed to load legal notes" };
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load legal notes";
    return { status: false, message };
  }
};
