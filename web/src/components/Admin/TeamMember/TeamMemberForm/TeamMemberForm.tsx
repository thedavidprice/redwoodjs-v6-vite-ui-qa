import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTeamMemberById, UpdateTeamMemberInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTeamMember = NonNullable<EditTeamMemberById['teamMember']>

interface TeamMemberFormProps {
  teamMember?: EditTeamMemberById['teamMember']
  onSave: (data: UpdateTeamMemberInput, id?: FormTeamMember['id']) => void
  error: RWGqlError
  loading: boolean
}

const TeamMemberForm = (props: TeamMemberFormProps) => {
  const onSubmit = (data: FormTeamMember) => {
    props.onSave(data, props?.teamMember?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTeamMember> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.teamMember?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.teamMember?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeamMemberForm
