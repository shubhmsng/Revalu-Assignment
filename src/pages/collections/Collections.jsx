import { useState } from "react";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { useReducer } from "react";
import {
  AddCollectionButton,
  CollectionsContainer,
  CollectionsCountText,
  DownloadButton,
  GridContainer,
} from "./styles";
import CollectionSidebar from "components/CollectionSidebar";
import Divider from "components/Divider";
import Card from "components/Card";
import Plus from "assets/Plus";
import Download from "assets/Download";
import ThreeDBox from "assets/ThreeDBox";
import Delete from "assets/Delete";
import DeleteCollection from "components/DeleteCollection/DeleteCollection";
import AddCollectionModal from "components/AddCollection/AddCollection";

const collectionsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLLECTION":
      return [...state, action.payload];
    case "REMOVE_COLLECTION":
      return state.filter((collection) => collection.id !== action.payload);
    default:
      return state;
  }
};

export default function Collections() {
  const [collections, dispatch] = useReducer(collectionsReducer, []);
  const [deleteCollectionId, setDeleteCollectionId] = useState(null);
  const [openAddCollection, setOpenAddCollection] = useState(false);

  const handleDeleteCollection = () => {
    dispatch({ type: "REMOVE_COLLECTION", payload: deleteCollectionId });
    setDeleteCollectionId(null);
  };

  const onDeleteCollection = (id) => {
    setDeleteCollectionId(id);
  };

  const onAddCollection = (name, desc) => {
    const collection = {
      id: (collections[collections.length - 1]?.id ?? 0) + 1,
      name,
      desc,
    };
    dispatch({ type: "ADD_COLLECTION", payload: collection });
    setOpenAddCollection(false);
  };

  return (
    <>
      <Grid container gap="20px" p="24px 36px">
        <CollectionSidebar
          collections={collections}
          setOpenAddCollection={setOpenAddCollection}
        />
        <CollectionsContainer>
          <Stack gap="12px">
            <Stack gap="32px" width="352px">
              <Typography fontSize="24px" fontWeight={500}>
                My Collections
              </Typography>
              <Typography fontSize="13px">
                Introducing collections: the ability to organise your materials,
                your way.
              </Typography>
            </Stack>
            <Stack>
              <CollectionsCountText>
                Showing {collections?.length} Results
              </CollectionsCountText>
              <Divider />
            </Stack>
          </Stack>
          <GridContainer>
            {collections.map((collection) => (
              <Card key={collection.id}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction="row" gap="16px">
                    <DownloadButton>
                      Download Data
                      <Download />
                    </DownloadButton>
                  </Stack>
                  <Stack direction="row" gap="16px" alignItems={"center"}>
                    <Stack direction="row" gap="5px" alignItems={"center"}>
                      <Typography fontSize="13px">87</Typography>
                      <ThreeDBox />
                    </Stack>
                    <IconButton
                      sx={{ p: 0 }}
                      onClick={() => onDeleteCollection(collection.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack gap="12px">
                  <Typography fontSize="16px" fontWeight={500}>
                    {collection.name}
                  </Typography>
                  <Typography fontSize="13px">{collection.desc}</Typography>
                </Stack>
              </Card>
            ))}
            <Card bgcolor="#F1F1EE">
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width="100%"
                height="100%"
              >
                <AddCollectionButton onClick={() => setOpenAddCollection(true)}>
                  <Plus />
                </AddCollectionButton>
              </Stack>
            </Card>
          </GridContainer>
        </CollectionsContainer>
      </Grid>
      <DeleteCollection
        open={!!deleteCollectionId}
        onDelete={handleDeleteCollection}
        onClose={() => setDeleteCollectionId(null)}
      />
      <AddCollectionModal
        open={openAddCollection}
        onClose={() => setOpenAddCollection(false)}
        onAdd={onAddCollection}
      />
    </>
  );
}
