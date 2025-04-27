import { toast } from "react-toastify";

export default function toastifyMessage(
  type: "error" | "success",
  message: string
) {
  if (type === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
}
