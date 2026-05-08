import { useInput } from "../hooks/inputs";
import Modal from "react-modal";
Modal.setAppElement("#root");

function EditModal({ isOpen, onRequestClose, onSave, initialValue = "", children }) {
  const [value, onChange] = useInput(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSave) {
      onSave(value);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit modal"
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      {children}
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={onChange} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}

export default EditModal;
