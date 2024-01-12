import { CheckCircledIcon } from "@radix-ui/react-icons";
interface FormErrorProps {
  message?: string;
}
export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 rounded-md p-3 text-sm text-emerald-500 flex gap-x-2 items-center ">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
