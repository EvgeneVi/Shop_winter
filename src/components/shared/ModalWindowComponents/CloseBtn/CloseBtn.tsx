import "./CloseBtn.scss";
type handlerModal = {
  closeWindow: (e: React.MouseEvent) => void;
};
export default function CloseBtn({ closeWindow }: handlerModal) {
  return <div className="modal-window__close" onClick={closeWindow}></div>;
}
