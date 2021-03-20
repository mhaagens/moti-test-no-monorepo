module.exports = (api) => {
  const useClassTransform = api.caller(
    (caller) => !!caller && caller.name !== "metro"
  );

  return {
    presets: ["@expo/next-adapter/babel"],
    plugins: [
      ...(useClassTransform ? ["@babel/plugin-proposal-class-properties"] : []),
      "react-native-reanimated/plugin",
    ],
  };
};
