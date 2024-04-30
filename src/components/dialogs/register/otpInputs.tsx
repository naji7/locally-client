"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OtpInputs = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[200px] rounded-md bg-slate-950 p-4 mx-auto">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 flex flex-col justify-center items-center"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="grid place-content-center items-center w-full">
              <FormControl className="w-full">
                <InputOTP maxLength={6} {...field} className="flex w-full">
                  <InputOTPGroup className="flex w-full max-w-[18rem] mx-auto">
                    <InputOTPSlot
                      index={0}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                    <InputOTPSlot
                      index={3}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                    <InputOTPSlot
                      index={4}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-full bg-[#6ed9f70c] font-bold rounded-lg border-[#6ed9f79f] min-w-[3rem]"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className="text-[0.625rem] text-red-500 opacity-70 mt-2" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-[#FF4C00] text-white max-w-[15rem] w-full px-[2.75rem] py-[1rem] flex items-center justify-center rounded-[0.5rem]"
        >
          Verify
        </Button>
      </form>
    </Form>
  );
};

export default OtpInputs;
