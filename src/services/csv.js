import { csv } from "d3";
import { from } from "rxjs";

export const getCsvData = (url) => {
  return from(csv(url));
};
