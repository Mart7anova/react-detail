import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {CustomSelect, CustomSelectPropsType} from './CustomSelect';


export default {
    title: 'components/CustomSelect',
    component: CustomSelect
} as ComponentMeta<typeof CustomSelect>;

const Template: Story<CustomSelectPropsType> = (args) => <CustomSelect {...args}/>

const callBack = action('clicked')
const callBacksProps = {onChange: callBack}

export const Base = Template.bind({})
Base.args = {
    ...callBacksProps,
    value: '1',
    item: [
        {title: 'Dima', value: '1'},
        {title: 'Misha', value: '2'},
        {title: 'Ira', value: '3'},
    ]
}

export const ModeChanging: Story<CustomSelectPropsType> = (args) => {
    const [value, setValue] = useState('1')

    return <CustomSelect value={value} onChange={(value) => setValue(value)} item={args.item}/>
}
ModeChanging.args = {
    item: [
        {title: 'Dima', value: '1'},
        {title: 'Misha', value: '2'},
        {title: 'Ira', value: '3'},
    ]
}

