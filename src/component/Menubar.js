import React from 'react'
import { Stack, Button } from '@mantine/core';

export default function () {
  return (
   
    <Stack h={300} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      <Button variant="outline">Home</Button>
      <Button variant="outline">Voter Profile</Button>
      <Button variant="outline">Contact-details</Button>
    </Stack>
  )
}
