import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathName = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/chat/conversations",
        icon: <MessageSquare />,
        active: pathName.startsWith("/chat/conversations"),
      },
      {
        name: "Friends",
        href: "/chat/friends",
        icon: <Users />,
        active: pathName.startsWith("/chat/friends"),
      },
    ],
    [pathName]
  );

  return paths;
};
