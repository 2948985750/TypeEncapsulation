type Record_<K extends string | symbol, P> = { [key in K]: P };
// key: obj
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record_<Page, PageInfo> = {
  about: { title: "" },
  contact: { title: "contact" },
  home: { title: "home" },
};
