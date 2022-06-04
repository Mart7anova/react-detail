import React, { useState } from 'react';
import { ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';


export default {
    title: 'components/Accordion',
    component: Accordion,
}as ComponentMeta<typeof Accordion>;

const callBack = action('clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callBacksProps =  {onClick:callBack}

export const CollapsedMode = Template.bind({})
CollapsedMode.args={
    ...callBacksProps,
    titleValue: 'Menu',
    collapsed:true,
}
export const UnfoldsMode = Template.bind({})
UnfoldsMode.args={
    ...callBacksProps,
    titleValue: 'Users',
    collapsed:false,
}

export const ModeChanging: Story<AccordionPropsType> = (args) =>{
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onClick={()=>setValue(!value)}/>
}
ModeChanging.args={
    titleValue: 'Menu',
    collapsed: false,
}
