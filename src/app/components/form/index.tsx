import { FormInputType, FormSchema, FormType } from "./type";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "../general/select";
import Input from "../general/input";
import { useState } from "react";

export default function Form({ province }: FormType) {
  const [state, setState] = useState({});

  const methods = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormInputType) => {
    // try {
    //   setLoading(true);
    //   const res = await addReportInfo(data);
    //   if (res.ok) {
    //     toast.success("اطلاعات شما با موفقیت ثبت شد");
    //     router.refresh();
    //   } else {
    //     throw new Error(res.error);
    //   }
    // } catch (e: any) {
    //   toast.error(e.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="firstname" label="نام" />
        <Input name="lastname" label="نام خانوادگی" />
        <Input name="phone" label="شماره تماس" type="number" />
        <Select items={province} name="province" label="استان" />
        {/* <Input /> */}
      </form>
    </FormProvider>
  );
}
