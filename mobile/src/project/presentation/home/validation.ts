import { object, string } from "yup";

const MAX_VALUE = Object.freeze({
  title: 50,
  description: 255,
  conclusion: 255,
  image: 255,
  category: 255,
  tecnologies: 255,
  demo: 255,
  github: 255,
});
const is_valid_url: RegExp =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const CATEGORIES = Object.freeze({
  WEB: "Web",
  MOBILE: "Mobile",
  SERVER: "Server",
  SQL: "Sql",
});
const validation = object({
  title: string()
    .required("title is a required field")
    .max(MAX_VALUE.title, "value exceeded"),
  description: string()
    .required("descripction is a required field")
    .max(MAX_VALUE.description, "value exceeded"),
  conclusion: string()
    .required("conclusion is a required field")
    .max(MAX_VALUE.conclusion, "value exceeded"),
  category: string()
    .required("category is a required field")
    .max(MAX_VALUE.category, "value exceeded")
    .test("category error ", "invalid entry", (value) => {
      return value === CATEGORIES.WEB ||
        value === CATEGORIES.WEB ||
        value === CATEGORIES.SERVER ||
        value === CATEGORIES.SQL
        ? true
        : false;
    }),
  tecnologies: string()
    .required("tecnologies is a required field")
    .max(MAX_VALUE.tecnologies, "value exceeded"),
  url_image: string()
    .required("cover page is a required field")
    .matches(is_valid_url, "url is invalid")
    .max(MAX_VALUE.demo, "value exceeded"),
  url_demo: string()
    .required("demo is a required field")
    .matches(is_valid_url, "url is invalid")
    .max(MAX_VALUE.demo, "value exceeded"),
  url_github: string()
    .required("github is a required field")
    .matches(is_valid_url, "url is invalid")
    .max(MAX_VALUE.github, "value exceeded"),
});
export { validation, MAX_VALUE };
