import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
};
