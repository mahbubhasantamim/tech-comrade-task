import {
  ContactSchema,
  IContactSchema,
} from "@/services/contacts/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useHomeController = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IContactSchema>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: IContactSchema) => {
    try {
      console.log(data);

      toast.success(JSON.stringify(data));

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
  };
};
