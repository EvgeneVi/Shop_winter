import "./CloseBtn.scss";
export default function CloseBtn({ openWindowlhandler }) {
  return (
    <div className="modal-window__close" onClick={openWindowlhandler}></div>
  );
}
