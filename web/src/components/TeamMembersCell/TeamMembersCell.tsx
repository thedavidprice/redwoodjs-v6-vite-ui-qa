import { Badge, MantineProvider } from '@mantine/core'

import TeamMember from '../TeamMember/TeamMember'

export const QUERY = gql`
  query TeamMembersQuery {
    teamMembers {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teamMembers }) => {
  return (
    <>
      <MantineProvider
        theme={{
          colors: {
            'bright-pink': [
              '#F0BBDD',
              '#ED9BCF',
              '#EC7CC3',
              '#ED5DB8',
              '#F13EAF',
              '#F71FA7',
              '#FF00A1',
              '#E00890',
              '#C50E82',
              '#AD1374',
            ],
          },
        }}
      >
        <Badge color="bright-pink" variant="filled">
          Does Mantine Work in a Cell?
        </Badge>
        <ul className="grid grid-cols-5 gap-x-4 gap-y-6">
          {teamMembers.map((member) => (
            <li key={member.id}>
              <TeamMember key={member.id} member={member} />
            </li>
          ))}
        </ul>
      </MantineProvider>
    </>
  )
}
