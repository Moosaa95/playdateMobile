import React, { useCallback, useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  PlayAbout,
  PlayFooter,
  PlayTabs,
  ScreenHeaderBtn,
  PlayDateType,
  Specifics,
  // About
} from "../../components";
import useFetch from "../../hook/useFetch";
// import Button from "../../components/playdateDetails/button/Button";

import { COLORS, icons, SIZES } from "../../constants";

const tabs = ["description", "child-info", "child-needs", "parent-info"];

function PlayDateDetails() {
  const router = useRouter();
  const params = useSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState({});

  const { loading, fetch } = useFetch();

  useEffect(() => {
   
    try {
      fetch("get-playdate-detail", { id: params.id }, "POST")
      .then (res => {
        console.log(res, "res")
        setData(res)
      }
      )
    } catch (err) {
      console.log(err);

    }
  }, [params.id]);

  console.log(params.id, "ipompams", data);
  // fetch("get-playdate-detail", { id: params.id }, "POST");

  const playDateDetail = {
    playdate_id: 1,
    playdate_name: "Playdate 1",
    location: "Location 1",
    time: "Time 1",
    description: "description 1",
    host: "host 1",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  };

  const isLoading = false;
  const error = false;

  // alert(activeTab)

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  const onRefresh = () => {};

  // dump data of playdatetype fields are title, description, location, host, start_time, end_time, date, status, playdate_type, location
  const playDateType = {
    id: 1,
    title: "Playdate 13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor ut pariatur suscipit dignissimos molestias dolorem nulla libero quasi veritatis! Consectetur sunt accusantium dignissimos nam magni distinctio, laboriosam suscipit. Voluptate.",
    playdate_location: "location 1",
    host: "host 1",
    start_time: "start_time 1",
    end_time: "end_time 1",
    date: "date 1",
    status: "Available", // to know if playdate is available or not
    playdate_type: "playdate_type 1",
    location: "location 1",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  };

  const displayTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <PlayAbout
            title="Description"
            description={
              data
                ? data.description
                  ? data.description
                  : "No description"
                : "Loading..."
            }
          />
        );
      case "child-info":
        return <Specifics title="Child Info" />;
      case "child-needs":
        return <Specifics title="Child Needs" />;
      case "parent-info":
        return <Specifics title="Parent Info" />;
      default:
        break;
    }
  };

  const handleSendPlayRequest = () => {
    // TODO: Implement logic for sending play request
    alert("Play request sent!");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              // onPress={() => console.log("Search")}
            />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text style={styles.error}>Error</Text>
          ) : playDateDetail.length === 0 ? (
            <Text style={styles.error}>No Playdate</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              {data ? (
                <PlayDateType
                  title={data.title}
                  playdate_location={data.address}
                  host={data.host_name}
                  start_time={data.start_time}
                  end_time={data.end_time}
                  date={data.date}
                  status={`${data.available_status}`}
                  playDateImage={playDateType.image}
                  playdate_type={data.type}
                />
              ) : (
                <ActivityIndicator size="large" color={COLORS.primary} />
              )}

              <PlayTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <PlayFooter />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#33A8FF",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PlayDateDetails;
