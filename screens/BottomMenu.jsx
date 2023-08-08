import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const MatchRoute = () => <Text>Match</Text>;

const SendMoneyRoute = () => <Text>Send Money</Text>;

const ChatRoute = () => <Text>Chat</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const BottomMenu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'match', title: 'Match', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'send', title: 'Send Money', focusedIcon: 'send', unfocusedIcon: 'send-outline' },
    { key: 'chat', title: 'Chat', focusedIcon: 'chat', unfocusedIcon: 'chat-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    match: MatchRoute,
    send: SendMoneyRoute,
    chat: ChatRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomMenu;