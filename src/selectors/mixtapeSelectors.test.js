import { getUserMixtapes, getLastEditedMixtape, getActiveMixtape } from './mixtapeSelectors';

describe('Mixtape Selectors', () => {

  let state;
  beforeEach(()=> {
    state = {
      user: {
        loading: true,
        mixtapes: [
          {
            mixtapeName: 'My Mixtape',
            createdBy: 'josephtatum',
            songs: [
              {
                nativeId: 'AF607105',
                nativeSource: 'youtube',
                title: 'Charlotte Gainsbourg - AF607105',
                buyLink: '',
                thumbnail: ''
              }
            ]
          }
        ],
        username: 'josephtatum',
        passwordHash: '3.1415926540'
      },
      activeMixtape: {
        loading: true,
        id: '1111111',
        mixtapeName: 'My Mixtape',
        songs: [
          {
            nativeId: 'AF607105',
            nativeSource: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            buyLink: '',
            thumbnail: ''
          }
        ],
        currentSongIndex: 0,
        createdBy: 'josephtatum'
      },
      lastEditedMixtape: {
        loading: true,
        mixtapeName: 'My Mixtape',
        songs: [
          {
            nativeId: 'AF607105',
            nativeSource: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            buyLink: '',
            thumbnail: ''
          }
        ]
      }
    };
  });

  it('can get the active users mixtapes', () => {
    const userMixtapes = getUserMixtapes(state);
    expect(userMixtapes).toEqual([
      {
        mixtapeName: 'My Mixtape',
        createdBy: 'josephtatum',
        songs: [
          {
            nativeId: 'AF607105',
            nativeSource: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            buyLink: '',
            thumbnail: ''
          }
        ]
      }
    ]);
  });

  it('can get the users last edited mixtape', () => {
    const usersLastEditedMixtape = getLastEditedMixtape(state);
    expect(usersLastEditedMixtape).toEqual({
      loading: true,
      mixtapeName: 'My Mixtape',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ]
    });
  });

  it('can get the users active mixtape', () => {
    const activeMixtape = getActiveMixtape(state);
    expect(activeMixtape).toEqual({
      loading: true,
      id: '1111111',
      mixtapeName: 'My Mixtape',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    });
  });

});
