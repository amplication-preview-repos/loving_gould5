import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  name?: SortOrder;
  techStack?: SortOrder;
  updatedAt?: SortOrder;
};
