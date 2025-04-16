import React, { ReactNode, useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { habits } from "../state/habit/habitSelector";
import colors from "../assets/colors";
import Card from "../components/Card";
import data from "../utils/data";
import { delete_habit } from "../state/habit/habitSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userHabits = useSelector(habits);

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(userHabits.length).fill(false)
  );
  const handleCheck = (index: number) => {
    const habit = userHabits[index];
    if (!habit) return;

    setCheckedItems((prev) => {
      const newChecked = [...prev];
      newChecked[index] = true;
      return newChecked;
    });

    dispatch(delete_habit({ name: habit.name }));
  };

  useEffect(() => {
    setCheckedItems(new Array(userHabits.length).fill(false));
  }, [userHabits]);

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
          }}
          style={styles.userImage}
          resizeMode="cover"
        />
        <View>
          <Text style={{ fontWeight: 600 }}>Hello ✋</Text>
          <Text style={{}}>Mbuthi Mungai</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      <ScrollView style={styles.scrollView}>
        {userHabits.map<ReactNode>((value, index) => {
          return (
            <Card key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text numberOfLines={1} style={styles.title}>
                  {value.name}
                </Text>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
              <View style={styles.cardBottom}>
                <Checkbox
                  style={styles.checkbox}
                  value={checkedItems[index]}
                  onValueChange={() => handleCheck(index)}
                  color={checkedItems[index] ? colors.blue : undefined}
                />

                <Text style={{ fontStyle: "italic", fontWeight: 300 }}>
                  Mark as complete
                </Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    height: 90,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  cardBottom: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {},
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  scrollView: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  topPart: {
    backgroundColor: colors.white,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  userImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
export default Home;
