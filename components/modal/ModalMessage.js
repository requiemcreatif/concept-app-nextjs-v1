import { useEffect, useState } from "react";

const ModalMessage = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [message]);

  return (
    <>
      {show && (
        <div className="fixed z-50 top-0 right-0 m-4">
          <div className="bg-green-500 text-white rounded-md p-4">
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMessage;
