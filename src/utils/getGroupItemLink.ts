import type { GroupItem } from "@typings";

function getGroupItemLink(groupItem: GroupItem) {
  return groupItem.slug ? `/${groupItem.groupType}/${groupItem.slug}` : "";
}

export default getGroupItemLink;
