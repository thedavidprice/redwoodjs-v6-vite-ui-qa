import EditTeamMemberCell from 'src/components/Admin/TeamMember/EditTeamMemberCell'

type TeamMemberPageProps = {
  id: number
}

const EditTeamMemberPage = ({ id }: TeamMemberPageProps) => {
  return <EditTeamMemberCell id={id} />
}

export default EditTeamMemberPage
