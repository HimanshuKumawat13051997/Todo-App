import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./content.css";

export function Content({ pass }) {
  return (
    <div className="content" style={{ width: "inherit" }}>
      {pass.filteredList.map((items, id) => {
        return (
          <ul
            onClick={() => {
              pass.setKeptIndex(id);
            }}
            key={id}
            className="listwwe"
          >
            <li className="checking">
              <input
                type="checkbox"
                name=""
                checked={items.dito}
                onChange={() => {
                  pass.handleChange(id);
                }}
              />
            </li>
            <li>
              <div>
                <span
                  style={{
                    position: "relative",
                    top: "7px",
                  }}
                  className="tasknam"
                >
                  {items.task}
                </span>
              </div>
            </li>
            <li className="icontus">
              <div>
                <span>
                  <MdDeleteForever
                    size={30}
                    onClick={() => {
                      pass.deleteTask(id);
                    }}
                  />
                </span>
                <span>
                  <FaEdit size={25} onClick={() => pass.updateTask(id)} />
                </span>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
