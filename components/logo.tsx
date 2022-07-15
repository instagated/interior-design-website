import React from 'react'

import { Heading, Text } from '@chakra-ui/core'

const Logo: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="lg" color="orange.500" textTransform="uppercase">
        <Text display="inline" fontWeight="extrabold">
          New Look
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Home Design & Structures LLC.
        </Text>
      </Heading>
    </>
  )
}

export default Logo
