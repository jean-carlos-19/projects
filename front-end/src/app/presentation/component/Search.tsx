import { Title_2 } from "@project/presentation/element";

const Search = () => {
  return (
    <div className="search">
      <Title_2 css={"text-color-white-100"} name={"Projects"} />
      <section>
        <button title="Search projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
        <input
          className="paragraph text-color-gray-100"
          type="search"
          name=""
          id=""
          placeholder="search"
        />
      </section>
    </div>
  );
};

export { Search };
