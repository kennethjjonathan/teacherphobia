import { AuthApiError } from "@supabase/supabase-js";
import { toast } from "sonner";

const toastError = (error: unknown) => {
  if (error instanceof AuthApiError) {
    toast.error(error.message);
    return;
  }
  if (typeof error === "string") {
    toast.error(error);
    return;
  }
  toast.error("Something went wrong.");
};

export { toastError };
