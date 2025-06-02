import { strNum, strReq } from "@/app/utils/zod/str";
import { z } from "zod";

const lastname = "نام و نام خانوادگی اجباری است";
const phone = "شماره تماس اجباری است";
const province = "استان اجباری است";
const firstname = "نام اجباری است";
// const birthday = "شغل اجباری است";
const job = "شغل اجباری است";

export const FormSchema = z.object({
  firstname: strReq(firstname),
  lastname: strReq(lastname),
  province: strNum(province),
  //   birthday: strReq(birthday),
  phone: strReq(phone),
  job: strReq(job),
});

export type FormInputType = z.infer<typeof FormSchema>;

export type FormType = {
  province: Array<any>;
};
