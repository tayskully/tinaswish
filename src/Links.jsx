import data from "../data.json";
import { useDroppable } from "@dnd-kit/core";


const Links = () => {
  function Droppable(data) {
    const { isOver, setNodeRef } = useDroppable({
      id: "droppable",
    });
    const style = {
      color: isOver ? "green" : undefined,
    };

    return (
      <div ref={setNodeRef} style={style}>
        {data.children}
      </div>
    );
  }

  const postcard = "/postcard1.png";

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      {data.links.map((links) => (
        <>
          <ul role="list" className="divide-y divide-gray-100">
            <li
              className="flex justify-between gap-x-6 py-5"
              key={links.id}
              id="button"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-none bg-gray-50"
                  src={links.image}
                  alt=""
                ></img>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <a
                      href={links.url}
                      className="flex items-center gap-4 mt-8 text-black"
                    >
                      {links.title}
                    </a>
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
                </div>
              </div>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default Links;
