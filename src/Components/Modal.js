import ReactDOM from "react-dom";

const Modal = ({ children, open, close }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 modalContainer flex justify-center items-center">
      <div className="px-16 pt-16 pb-10 bg-darkblue rounded-md relative">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5254/5254940.png"
          className="w-[34px] absolute top-1 right-1"
          alt="img"
          onClick={close}
        />
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
