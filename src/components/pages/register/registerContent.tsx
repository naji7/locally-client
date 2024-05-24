import RegisterCard from "@/components/cards/registerCard";
import RegisterForm from "@/components/forms/register/registerForm";
import RegisterHeader from "@/components/headers/registerHeader/registerHeader";

function RegisterContent() {
  return (
    <div className="flex flex-col items-center w-full bg-white relative">
      {/* <div className="bg-[#78DCF8] px-9 w-full row-span-6">
        <RegisterHeader />
      </div> */}
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
}

export default RegisterContent;
