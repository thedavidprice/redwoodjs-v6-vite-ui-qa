export const schema = gql`
  type TeamMember {
    id: Int!
    name: String
    imageUrl: String
  }

  type Query {
    teamMembers: [TeamMember!]! @requireAuth
    teamMember(id: Int!): TeamMember @requireAuth
  }

  input CreateTeamMemberInput {
    name: String
    imageUrl: String
  }

  input UpdateTeamMemberInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`
