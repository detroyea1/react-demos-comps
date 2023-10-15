import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'queiortyhaf',
      label: 'Can I use React on a project?',
      content: 'Never!!! React is too inefficient and overhyped'
    },
    {
      id: 'iuyrtopaufha',
      label: 'Can I use Javascript on a project?',
      content: 'Never!!! Javascript was never meant to be scalable!!'
    },
    {
      id: 'itjoresjgkert',
      label: 'Can I use CSS on a project?',
      content: 'Never!!! Ur mom uses CSS!!'
    }
  ];

  return <Accordion items={items}/>;
}

export default AccordionPage;