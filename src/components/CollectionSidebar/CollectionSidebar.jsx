import { useState } from "react";
import { Collapse, Stack } from "@mui/material";
import PropTypes from "prop-types";
import Arrow from "assets/Arrow";
import Folder from "assets/Folder";
import NewFolder from "assets/NewFolder";
import Divider from "components/Divider";
import {
  CollectionSidebarContainer,
  CollectionSidebarItem,
  CollectionSidebarItemName,
  CollectionSidebarNameContainer,
} from "./styles";

const CollectionSidebar = ({ collections = [], setOpenAddCollection }) => {
  const [showSidebarCollections, setShowSidebarCollections] = useState(true);

  const handleSidebarCollectionsClick = () => {
    setShowSidebarCollections((val) => !val);
  };

  return (
    <CollectionSidebarContainer>
      <CollectionSidebarItem onClick={handleSidebarCollectionsClick}>
        <CollectionSidebarItemName>My Collections</CollectionSidebarItemName>
        <Arrow rotate={!showSidebarCollections ? "90deg" : "0deg"} />
      </CollectionSidebarItem>
      <Collapse in={showSidebarCollections}>
        <Stack gap="6px" mt="12px">
          {collections.map((collection) => (
            <CollectionSidebarItem key={collection.id}>
              <CollectionSidebarNameContainer>
                <Folder />
                <CollectionSidebarItemName noWrap title={collection.name}>
                  {collection.name}
                </CollectionSidebarItemName>
              </CollectionSidebarNameContainer>
              <Arrow rotate="90deg" />
            </CollectionSidebarItem>
          ))}
        </Stack>
      </Collapse>
      <Divider />
      <CollectionSidebarNameContainer
        onClick={() => setOpenAddCollection(true)}
      >
        <NewFolder />
        <CollectionSidebarItemName>New Collections</CollectionSidebarItemName>
      </CollectionSidebarNameContainer>
    </CollectionSidebarContainer>
  );
};

CollectionSidebar.propTypes = {
  collections: PropTypes.array,
  setOpenAddCollection: PropTypes.func,
};

export default CollectionSidebar;
