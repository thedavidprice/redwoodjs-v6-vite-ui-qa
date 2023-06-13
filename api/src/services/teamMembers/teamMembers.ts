import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const teamMembers: QueryResolvers['teamMembers'] = () => {
  return db.teamMember.findMany()
}

export const teamMember: QueryResolvers['teamMember'] = ({ id }) => {
  return db.teamMember.findUnique({
    where: { id },
  })
}

export const createTeamMember: MutationResolvers['createTeamMember'] = ({
  input,
}) => {
  return db.teamMember.create({
    data: input,
  })
}

export const updateTeamMember: MutationResolvers['updateTeamMember'] = ({
  id,
  input,
}) => {
  return db.teamMember.update({
    data: input,
    where: { id },
  })
}

export const deleteTeamMember: MutationResolvers['deleteTeamMember'] = ({
  id,
}) => {
  return db.teamMember.delete({
    where: { id },
  })
}
