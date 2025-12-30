type ModalProps = {
   isOpen: boolean,
onClose: ()=> void,
children: React.ReactNode,
title?: string
}

const Modal = ({isOpen, onClose, title, children}: ModalProps) => {
   if(!isOpen) return null;
    return (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal Box */}
      <div className="w-[90%] max-w-md rounded-2xl bg-white shadow-2xl animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-3">
          {title && (
            <h2 className="text-lg font-semibold text-gray-800">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="rounded-full bg-red-100 px-3 py-1 text-red-600 hover:bg-red-200 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 text-gray-700">
          {children}
        </div>
      </div>
    </div>
    );
};

export default Modal;