const initialState = {
  twitters: [
    {
      id: '1a',
      title: 'My Twitter',
      content: 'Passionate Frontend Developer',
      twitterName: 'kubahermyt',
      created: '1 day ago',
    },
    {
      id: '2a11143v2423v423v4',
      title: 'Hello Roman',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'hello_roman',
    },
    {
      id: '2bv4324v4',
      title: 'Redux guy',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'dan_abramov',
    },
    {
      id: '3cv32v423v4v21v4',
      title: 'React router stuff',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
      twitterName: 'mjackson',
    },
    {
      id: '4cv432v423v423v23v',
      title: 'Super animacje!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
      twitterName: 'sarah_edo',
    },
  ],

  notes: [
    {
      id: '2adsdsads',
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: '2adsads',
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: '3a2321',
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: '4av32v4324',
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
    },
  ],

  articles: [
    {
      id: '1bv423v43',
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl:
        'https://youtube.com/helloroman',
      created: '1 day',
    },
    {
      id: '2bv3v432',
      title: 'Wish you React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl:
        'https://youtube.com/helloroman',
      created: '1 day',
    },
    {
      id: '3bv3v',
      title: 'You gave React a bad name',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl:
        'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: '4bv3v432v432v4',
      title: 'Is it React you looking for?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl:
        'https://youtube.com/helloroman',
      created: '10 days',
    },
  ],
};

const rootReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case `REMOVE_ITEM`:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              item.id !== action.payload.id,
          ),
        ],
      };
    case `ADD_ITEM`:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
