import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

const FriendsPage = () => {
  return (
    <>
      <ItemList title="Friends">FriendsPage</ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
