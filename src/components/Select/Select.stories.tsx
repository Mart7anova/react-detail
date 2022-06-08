import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Select, {SelectPropsType} from './Select';


export default {
    title: 'components/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

const callBack = action('clicked')
const callBacksProps = {onChange: callBack}

export const Base = Template.bind({})
Base.args = {
    ...callBacksProps,
    value: '0',
    item: [
        {title: 'Dima', value: '1'},
        {title: 'Misha', value: '2'},
        {title: 'Ira', value: '3'},
    ]
}

export const ModeChanging: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('')

    return <Select value={value} onChange={(value) => setValue(value)} item={args.item}/>
}
ModeChanging.args = {
    item: [
        {title: 'Dima', value: '1'},
        {title: 'Misha', value: '2'},
        {title: 'Ira', value: '3'},
    ]
}

