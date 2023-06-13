import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String6541011' } },
    two: { data: { email: 'String3431515' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
