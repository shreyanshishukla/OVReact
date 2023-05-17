import React from 'react'
import { Accordion, createStyles, rem ,ActionIcon,AccordionControlProps,Box } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import axios from 'axios';
import './FAQ.css'
import { Button, Form, Input, message, Space } from 'antd';


function AccordionControl(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <IconDots size="1rem" />
      </ActionIcon>
    </Box>
  );
}



const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    border: `${rem(1)} solid transparent`,
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));

export default function FAQ() {
  

  const { classes } = useStyles();
  const [form] = Form.useForm();
  const onFinish = (values) => {
   
    axios.post('http://localhost:5000/FAQPOST', {
      FAQ: values.FAQ,
    
    })
    .then((response) => {
      if(response.data=='OK')
      {
       
        message.success('Submit success!');
      }
      else{
        message.error('Submit failed!');

      }

      console.log(response)

    });

  };
   
  
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  
  return (
    
    <div style={{margin:"20px"}}>
      
      <div className='twelve'> <h1>Frequently Asked Questions </h1></div>


    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className='login-formss'
    >
      <Form.Item
        name="FAQ"
        label="Your Question"
        rules={[
          {
            required: true,
          },
          {
           
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          
        </Space>
      </Form.Item>
    </Form>
  
    <Accordion
      maw={500}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
       <Accordion.Item value="item-1">
        <AccordionControl>How does this webiste work?</AccordionControl>
        <Accordion.Panel>This website works on blockchain server alaong with react and node server.The website securely registers the vote and they are send directly to the blockchain for storage 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion
      maw={500}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
       <Accordion.Item value="item-1">
        <AccordionControl>Is my vote safe?</AccordionControl>
        <Accordion.Panel>Yes the votes are stored in blockchain and they can't be altered by any entity.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion
            maw={500}
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
       <Accordion.Item value="item-1">
        <AccordionControl>Can I login without adhar card?</AccordionControl>
        <Accordion.Panel>No adhar card acts as two factor authentication and it is mandatory for verifying you as a legal citizen of India</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion
            maw={500}

      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
    >
       <Accordion.Item value="item-1">
        <AccordionControl>How many times I can vote</AccordionControl>
        <Accordion.Panel>Only once</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
   

    </div>
  );
}