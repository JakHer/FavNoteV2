import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'My Twitter',
    content: 'Passionate Frontend Developer',
    twitterName: 'kubahermyt',
    created: '1 day ago',
  },
  {
    id: 2,
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    id: 3,
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    id: 4,
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    id: 5,
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const Twitters = () => (
  <GridTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card
        cardType="twitter"
        title={item.title}
        content={item.content}
        created={item.created}
        twitterName={item.twitterName}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
