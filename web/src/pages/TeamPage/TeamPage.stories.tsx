import type { ComponentMeta } from '@storybook/react'

import TeamPage from './TeamPage'

export const generated = () => {
  return <TeamPage />
}

export default {
  title: 'Pages/TeamPage',
  component: TeamPage,
} as ComponentMeta<typeof TeamPage>
