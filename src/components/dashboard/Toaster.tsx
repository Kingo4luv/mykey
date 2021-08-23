import { useEffect } from "react";
import { useContext } from "react";
import { deleteToast } from "../../utils/helper";
import { Context } from "../../utils/store";
import ToasterItem from "./ToasterItem";

const Toaster = () => {
  const { state, dispatch } = useContext(Context);

  console.log(state?.Toasts);

  const _remove = (id: any) => {
    deleteToast(id, dispatch)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (state?.Toasts.length) {
        _remove(state.Toasts[0].id);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  //   justify-end items-center h-20  flex flex-col
  return (
    <div className="w-full h-20 bg-transparent flex flex-col fixed top-0 left-0 z-50 px-2 mt-12 items-end">
      {state?.Toasts && state?.Toasts.length > 0 &&
        state?.Toasts.map((toast, idx) => {
          return (
            <ToasterItem
              type={toast.type}
              text={toast.text}
              key={idx}
              id={toast.id}
              remove={_remove}
            />
          );
        })}
    </div>
  );
};

export default Toaster;
