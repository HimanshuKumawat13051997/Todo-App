import { useState } from "react";
import { AddItems } from "./components/AddItems";
import { Content } from "./components/content";
import { Headers } from "./components/header";
import { Middle } from "./components/middle";
import { ShowDefault } from "./components/default";
import { useEffect } from "react";

function App() {
  const [isAddItemsVisible, setIsAddItemsVisible] = useState(false);
  const [text, setText] = useState("");
  const [letchange, setLetsChange] = useState(false);
  const [keptindex, setKeptIndex] = useState();

  const handleAddButtonClick = () => {
    setIsAddItemsVisible(true);
  };

  const handleCloseAddItems = () => {
    setIsAddItemsVisible(false);
  };
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("Todo"));
    setListItem(data || []);
  }, [listItem]);

  const textChange = (event) => {
    const drama = event.target.value;
    setText(drama);
  };
  const [check, setChecked] = useState(false);
  const [select, setSelect] = useState("Incomplete");

  useEffect(() => {
    if (select === "Complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [select]);

  const onClickToAddInItem = !letchange
    ? () => {
        if (text) {
          let newArray = [
            ...listItem,
            { task: text, status: select, dito: check },
          ];
          window.localStorage.setItem("Todo", JSON.stringify(newArray));
          let todolist = window.localStorage.getItem("Todo");
          setListItem(JSON.parse(todolist));
          setIsAddItemsVisible(false);
          setText("");
          setSelect("Incomplete");
        }
      }
    : (id) => {
        const Copy = [...listItem];
        Copy[id].task = text;
        Copy[id].status = select;
        Copy[id].dito = check;
        window.localStorage.setItem("Todo", JSON.stringify(Copy));
        setListItem(Copy);
        setIsAddItemsVisible(false);
        setText("");
        setLetsChange(false);
      };

  const deleteTask = (id) => {
    const tasksCopy = [...listItem];
    tasksCopy.splice(id, 1);
    window.localStorage.setItem("Todo", JSON.stringify(tasksCopy));
    setListItem(tasksCopy);
  };

  const [filter, setFilter] = useState("All");
  const onFilteringDifferent = (event) => {
    setFilter(event.target.value);
  };

  const updateTask = (id) => {
    setIsAddItemsVisible(true);
    setLetsChange(true);
    setText(listItem[id].task);
    setSelect(listItem[id].status);
  };

  const handleChange = (id) => {
    const tasksCopy = [...listItem];
    if (tasksCopy[id].dito === true) {
      tasksCopy[id].dito = false;
      tasksCopy[id].status = "Incomplete";
      window.localStorage.setItem("Todo", JSON.stringify(tasksCopy));
      setListItem(tasksCopy);
    } else {
      tasksCopy[id].dito = true;
      tasksCopy[id].status = "Complete";
      window.localStorage.setItem("Todo", JSON.stringify(tasksCopy));
      setListItem(tasksCopy);
    }
  };

  let filteredList;

  if (filter === "Complete") {
    filteredList = listItem.filter((item) => item.status === "Complete");
  } else if (filter === "Incomplete") {
    filteredList = listItem.filter((item) => item.status === "Incomplete");
  } else {
    filteredList = listItem;
  }

  return (
    <main className="d-flex justify-content-center">
      <div
        className="container-md d-flex flex-column align-items-center column-gap-3"
        // style={{ width: "60vw" }}
      >
        <Headers />
        <Middle
          onAddButtonClick={{ handleAddButtonClick, onFilteringDifferent }}
        />

        {filteredList.length > 0 ? (
          <Content
            pass={{
              filteredList,
              deleteTask,
              setListItem,
              handleChange,
              updateTask,
              setKeptIndex,
            }}
          />
        ) : (
          <ShowDefault />
        )}
      </div>
      <AddItems
        pass={{
          isAddItemsVisible,
          handleCloseAddItems,
          textChange,
          onClickToAddInItem,
          text,
          setSelect,
          select,
          setChecked,
          keptindex,
        }}
      />
    </main>
  );
}

export default App;
