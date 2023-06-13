import { Badge, MantineProvider } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import TeamMembersCell from '../../components/TeamMembersCell'

const TeamPage = () => {
  return (
    <>
      <MetaTags title="Team" description="Team page" />
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
        <div className="bg-gray-900">
          <div className="mx-auto x-8 py-12">
            <div className="space-y-12 px-6">
              <img
                className="w-96 mx-auto"
                src="https://user-images.githubusercontent.com/6943688/172691459-c2bd6ea2-1b27-4532-8b28-a70c811f7339.png"
                alt="The Avengers"
              />
              <Badge color="bright-pink" variant="filled">
                Does Mantine Work?
              </Badge>
              <TeamMembersCell />
            </div>
          </div>
        </div>
      </MantineProvider>
    </>
  )
}

export default TeamPage
