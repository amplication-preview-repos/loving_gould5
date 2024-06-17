import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
