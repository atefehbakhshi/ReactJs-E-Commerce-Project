import { useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons";
import Input from "../../components/input";

export const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("first");
    navigate("/admin/all-products");
  };

  return (
    <div className="flex justify-center py-8 min-h-[100vh] items-center form-container">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-8 border max-w-xl mx-auto bg-white p-4 rounded form-shadow"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="نام کاربری" id="name" type="text" />
          <Input label="رمز عبور" id="password" type="password" />
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
