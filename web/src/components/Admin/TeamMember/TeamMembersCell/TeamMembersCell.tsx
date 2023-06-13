import type { FindTeamMembers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeamMembers from 'src/components/Admin/TeamMember/TeamMembers'

export const QUERY = gql`
  query FindTeamMembers {
    teamMembers {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teamMembers yet. '}
      <Link to={routes.adminNewTeamMember()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ teamMembers }: CellSuccessProps<FindTeamMembers>) => {
  return <TeamMembers teamMembers={teamMembers} />
}
