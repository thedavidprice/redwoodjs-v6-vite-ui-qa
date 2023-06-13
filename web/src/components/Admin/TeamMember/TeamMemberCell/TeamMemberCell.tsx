import type { FindTeamMemberById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeamMember from 'src/components/Admin/TeamMember/TeamMember'

export const QUERY = gql`
  query FindTeamMemberById($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TeamMember not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  teamMember,
}: CellSuccessProps<FindTeamMemberById>) => {
  return <TeamMember teamMember={teamMember} />
}
