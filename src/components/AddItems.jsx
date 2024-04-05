import "./AddItems.css";
import { IoIosClose } from "react-icons/io";

export function AddItems({ pass }) {
  const onSelectedOption = (event) => {
    pass.setSelect(event.target.value);
  };

  return (
    <div
      id="trap"
      className={`${pass.isAddItemsVisible ? "mainheading" : "active1"}`}
    >
      <div className="inner">
        <div className="bt" onClick={pass.handleCloseAddItems}>
          <IoIosClose size={30} />
        </div>
        <div className="adding">
          <h1>Add Task</h1>
          <div className="addition">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name=""
              id=""
              onChange={pass.textChange}
              value={pass.text}
            />
          </div>
          <div className="change">
            <label htmlFor="status">Status</label>
            <select
              value={pass.select}
              name="status"
              id=""
              onChange={onSelectedOption}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div className="btnnn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => pass.onClickToAddInItem(pass.keptindex)}
            >
              Add
            </button>
            <button
              className="btn btn-light"
              type="button"
              onClick={pass.handleCloseAddItems}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
