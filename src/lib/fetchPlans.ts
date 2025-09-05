import axios, { AxiosError } from "axios";
import { GET_PLANS_ROUTE } from "./constants";

export const fetchPlans = async (): Promise<{
  success: boolean;
  message: string;
  plans: Plan[];
}> => {
  try {
    const res = await axios
      .get<{ status: boolean; plans: Plan[] }>(GET_PLANS_ROUTE)
      .then((res) => res.data);
    if (res.status) {
      return { success: true, message: "Plans Loaded", plans: res.plans };
    } else {
      return { success: false, message: "Failed to Load Plans", plans: [] };
    }
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error.response
          ? error.response.data.message
          : error.message
        : "Failed to Plans Load";
    return { success: false, message: errorMessage, plans: [] };
  }
};
