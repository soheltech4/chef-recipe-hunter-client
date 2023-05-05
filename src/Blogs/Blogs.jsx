import React from 'react';
import { Accordion } from 'react-bootstrap';
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';

const BlogPDF = ({ data }) => {
  return (
    <Document>
      {data.map((item, index) => (
        <Page key={index}>
          <h3>{item.header}</h3>
          <p>{item.body}</p>
        </Page>
      ))}
    </Document>
  );
};

const Blogs = () => {
  const data = [
    {
      header: '(1) Tell us the differences between uncontrolled and controlled components.',
      body: 'In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.'
    },
    {
      header: '(2) How to validate React props using PropTypes',
      body: 'We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.'
    },
    {
      header: '(3) Tell us the difference between nodejs and express js.',
      body: 'Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications".'
    },
    {
      header: '(4) What is a custom hook, and why will you create a custom hook?',
      body: 'Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.'
    }
  ];

  return (
    <div className='container mx-auto p-5'>
      <div className='p-5 border border-2 border-warning rounded'>
        <h3 className='text-center mb-5'>This is Blogs</h3>
        <Accordion defaultActiveKey='0'>
          {data.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <PDFDownloadLink document={<BlogPDF data={data} />} fileName='blogs.pdf'>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Blogs;
