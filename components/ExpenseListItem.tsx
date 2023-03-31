import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import appStyles from '../styles/appStyles';

const ExpenseListItem = ({ data }: any) => {
  const navigate: any = useNavigation();
  const handlePress = () => {
    navigate.navigate('Manage Expense', { id: data.id });
  };
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.desc}>{data.desc}</Text>
          <Text style={styles.date}>{data.date.toLocaleString()}</Text>
        </View>
        <View>
          <Text style={styles.amount}>${data.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.9,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: appStyles.colors.lightColor,
    borderRadius: 5,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    color: appStyles.colors.grayColor,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 14,
    color: appStyles.colors.darkGoldColor,
  },
});

export default ExpenseListItem;
