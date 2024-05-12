import { Header } from "./components/header";
import { CreateBar } from "./components/create-bar";
import { TableHeader } from "./components/table-header/table-header";
import { TodoItem } from "./components/todo-item";
import { useState } from "react";
import { EmptyList } from "./components/empty-list";

interface TodoItem {
  description: string;
  id: string;
  done: boolean;
}

function App() {
  const [todoItens, setTodoItens] = useState<TodoItem[]>([]);
  function addItem(description: string) {
    setTodoItens((todoItens) => {
      return [
        ...todoItens,
        { description, id: `item-${todoItens.length}`, done: false },
      ];
    });
  }
  function updateItem(id: string) {
    const index = todoItens.findIndex((item) => item.id === id);
    todoItens[index].done = !todoItens[index].done;
    setTodoItens((todoItens) => {
      return [...todoItens];
    });
  }
  function deleteItem(id: string) {
    setTodoItens((todoItens) => {
      const index = todoItens.findIndex((item) => item.id === id);
      if (index !== -1) todoItens.splice(index, 1);
      return [...todoItens];
    });
  }

  return (
    <>
      <Header />
      <CreateBar onCreate={addItem} />
      <TableHeader
        allItens={todoItens.length}
        doneItens={todoItens.reduce((acc, item) => {
          item.done && acc++;
          return acc;
        }, 0)}
      />
      {todoItens.length > 0 ? (
        todoItens.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onChange={updateItem}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default App;
