import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const countDown = () => {
      const newYear = new Date("2025-01-01T00:00:00");
      const now = new Date();
      const difference = newYear - now;
      if (difference <= 0) {
        setTime("Happy New Year");
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime(
          `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
        );
      }
    };
    const timer = setInterval(countDown, 1000);
    countDown();

    return () => clearInterval(timer);
  }, []);
  return (
    <View style={tw``}>
      {time === "Happy New Year" ? (
        <View style={tw``}>
          <ImageBackground
            style={tw`h-full w-full justify-center items-center`}
            source={require("@/assets/images/fireworks.gif")}
          >
            <Image
              style={tw`w-70 h-30`}
              resizeMode="cover"
              source={require("@/assets/images/newyear.png")}
            />
            <Image source={require("@/assets/images/2024.png")} />
          </ImageBackground>
        </View>
      ) : (
        <View>
          <ImageBackground
            style={tw`h-full w-full justify-center items-center`}
            source={require("@/assets/images/yourname.gif")}
          >
            <View style={tw`gap-7`}>
              <Text style={tw`text-white font-bold text-xl text-center`}>
                Countdown to New Year!
              </Text>
              <Text
                style={tw`text-white font-bold text-[15px] bg-red-400 rounded-lg px-1`}
              >
                {time}
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}
    </View>
  );
}
