import Icon from "@w3f/polkadot-icons/Icon";

export function TabBarPolkadotIcon({
  style,
  name,
  focused,
  ...rest
}: {
  style?: any;
  name: string;
  focused: boolean;
}) {
  return (
    <Icon
      size={28}
      variant="keyline"
      stroke="#E6007A"
      strokeWidth={2}
      fill={focused ? "rgba(230,0,122,0.5)" : "transparent"}
      fillMode="inside"
      name={name}
      {...rest}
    />
  );
}
