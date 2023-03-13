import { Button } from "../../components/buttons";
import Input from "../../components/input";
import { useAuth } from "../../hooks";

export const Login = () => {
  const { register, handleSubmit, errors, handleLoginUser } = useAuth();

  return (
    <div className="flex justify-center py-8 min-h-[100vh] items-center form-container">
      <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="flex flex-col gap-8 border max-w-xl mx-auto bg-white p-4 rounded form-shadow"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="نام کاربری"
            type="text"
            error={errors.username?.message}
            validation={{ ...register("username") }}
          />
          <Input
            label="رمز عبور"
            type="password"
            error={errors.password?.message}
            validation={{ ...register("password") }}
          />
        </div>
        <div>
          <div className="flex flex-col md:w-1/2 md:mx-auto">
            <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
              ورود
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
