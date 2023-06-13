import { Badge, MantineProvider } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TestPage = () => {
  return (
    <>
      <MetaTags title="Test" description="Test page" />

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
        <h1>TestPage</h1>
        <Badge color="bright-pink" variant="filled">
          Does Mantine Work on a Page?
        </Badge>
        <p>
          Find me in <code>./web/src/pages/TestPage/TestPage.tsx</code>
        </p>
        <p>
          My default route is named <code>test</code>, link to me with `
          <Link to={routes.test()}>Test</Link>`
        </p>
      </MantineProvider>
    </>
  )
}

export default TestPage
