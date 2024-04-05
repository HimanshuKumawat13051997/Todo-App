export function Middle({ onAddButtonClick }) {
  return (
    <div
      className="d-flex d-flex justify-content-between align-items-center  "
      style={{
        width: "inherit",
        margin: "10px",
        padding: "0px 2px",
        fontFamily: `"Poppins", sans-serif`,
      }}
    >
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: "150px" }}
        onClick={(id) => {
          onAddButtonClick.handleAddButtonClick(id);
        }}
      >
        Add
      </button>
      <select
        className="form-select form-select-md "
        aria-label="Large select example"
        name=""
        id=""
        style={{ width: "200px" }}
        onChange={onAddButtonClick.onFilteringDifferent}
      >
        <option>All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
}
