import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { DropDownSelect } from "react-native-simple-dropdown-select";
import Checkbox from "expo-checkbox";
import colors from "../assets/colors";
import AppButton from "../components/AppButton";

const { width } = Dimensions.get("screen");

const AddHabit = () => {
  interface DropDownItem {
    readonly id: number;
    name: string;
  }
  const [name, setName] = useState<string>();
  const [open, setOpen] = useState<boolean[]>([false, false, false]);
  const [value, setValue] = useState<DropDownItem>();
  const [goalType, setGoalType] = useState<DropDownItem>();
  const [suggestedTime, setSuggestedTime] = useState<DropDownItem>();
  const [reminder, setReminder] = useState<boolean>(false);

  const categories: DropDownItem[] = [
    { id: 1, name: "Health" },
    { id: 2, name: "Personal Development" },
    { id: 3, name: "Mindfulness" },
    { id: 4, name: "Mental Health" },
    { id: 5, name: "Productivity" },
    { id: 6, name: "Digital Wellness" },
    { id: 7, name: "Social" },
  ];

  const goals: DropDownItem[] = [
    { id: 1, name: "Daily" },
    { id: 2, name: "Weekly" },
    { id: 3, name: "Monthly" },
  ];

  const timeSuggested: DropDownItem[] = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Afternoon" },
    { id: 3, name: "Evening" },
    { id: 4, name: "Weekend" },
  ];
  const handleDropDownOpen = (index: number): void => {
    setOpen((prev) => {
      const openItems = [...prev];
      openItems[index] = !openItems[index];
      return openItems;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add habit screen</Text>
      <View
        style={{
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Enter habit name"
          onChangeText={setName}
          value={name}
        />
        <View style={{ height: 20 }}></View>
        <DropDownSelect
          containerStyle={[styles.dropDownStyle, { zIndex: 100 }]}
          toggle={() => handleDropDownOpen(0)}
          open={open[0]}
          onSelect={(data) => {
            setValue(data);
            handleDropDownOpen(0);
          }}
          data={categories}
          dropDownContainerStyle={{
            minWidth: width * 0.9,
            maxHeight: 300,
          }}
          selectedData={value}
        />
        <DropDownSelect
          toggle={() => handleDropDownOpen(1)}
          open={open[1]}
          onSelect={(data) => {
            setGoalType(data);
            handleDropDownOpen(1);
          }}
          data={goals}
          selectedData={goalType}
          containerStyle={[styles.dropDownStyle, { zIndex: 90 }]}
        />
        <DropDownSelect
          toggle={() => handleDropDownOpen(2)}
          open={open[2]}
          onSelect={(data) => {
            setSuggestedTime(data);
            handleDropDownOpen(2);
          }}
          data={timeSuggested}
          selectedData={suggestedTime}
          containerStyle={[styles.dropDownStyle, { zIndex: 80 }]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: width * 0.9,
          }}
        >
          <Text>Set reminder</Text>
          <Checkbox
            value={reminder}
            onValueChange={() => {
              setReminder(!reminder);
            }}
          />
        </View>
        <View style={{ height: 40 }}></View>
        <AppButton style={{ width: width * 0.9 }} text="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropDownStyle: {
    width: width * 0.9,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
  },
  heading: {
    fontSize: 28,
    paddingTop: 30,
    textAlign: "center",
    fontWeight: 600,
  },
  textInput: {
    height: 50,
    borderColor: colors.grey,
    borderWidth: 1,
    width: width * 0.9,
    borderRadius: 5,
    color: colors.dark,
    paddingHorizontal: 10,
  },
});
export default AddHabit;
