import {
  ZodEmailString,
  ZodNameString,
  ZodNumericString,
  ZodSimpleString,
} from "@/util/zod.util";
import { z } from "zod";

export const ContactSchema = z
  .object({
    firstName: ZodNameString,
    lastName: ZodNameString,
    email: ZodEmailString,
    phone: ZodNumericString,
    service: ZodSimpleString,
    message: ZodSimpleString,
  })
  .strict();

export type IContactSchema = z.infer<typeof ContactSchema>;
