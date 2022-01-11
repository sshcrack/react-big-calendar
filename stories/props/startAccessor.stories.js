import React from 'react'
import { Calendar } from '../../src'
import { accessorStoryArgs } from './storyDefaults'
import mdx from './startAccessor.mdx'

export default {
  title: 'props',
  component: Calendar,
  argTypes: {
    localizer: { control: { type: null } },
    events: { control: { type: null } },
    defaultDate: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 600 }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Calendar {...args} />

export const StartAccessor = Template.bind({})
StartAccessor.storyName = 'startAccessor'
StartAccessor.args = accessorStoryArgs
