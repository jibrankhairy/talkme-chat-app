import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathName = usePathname();

  const requestsCount = useQuery(api.requests.count);

  const conversations = useQuery(api.conversations.get);

  const unseenMessagesCount = useMemo(() => {
    return conversations?.reduce((acc, curr) => {
      return acc + curr.unseenCount;
    }, 0);
  }, [conversations]);

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/chat/conversations",
        icon: <MessageSquare />,
        active: pathName.startsWith("/chat/conversations"),
        count: unseenMessagesCount,
      },
      {
        name: "Friends",
        href: "/chat/friends",
        icon: <Users />,
        active: pathName.startsWith("/chat/friends"),
        count: requestsCount,
      },
    ],
    [pathName, requestsCount, unseenMessagesCount]
  );

  return paths;
};
