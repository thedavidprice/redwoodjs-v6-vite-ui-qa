// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TeamMember> = (args) => {
//   return <TeamMember {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { standard } from '../TeamMembersCell/TeamMembersCell.mock'

import TeamMember from './TeamMember'

export const generated = () => {
  return <TeamMember member={standard().teamMembers[2]} />
}

export default { title: 'Components/TeamMember' }
