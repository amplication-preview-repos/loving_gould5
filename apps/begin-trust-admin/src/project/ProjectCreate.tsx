import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
        <SelectArrayInput
          label="Tech Stack"
          source="techStack"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
