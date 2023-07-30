import { list } from "postcss";
import { trpc, inferQueryOutput } from "../../utils/trpc";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonLoading,
} from "@ionic/react";

type ListOutput = inferQueryOutput<"list.all">[0];

// const ListEntry = (props: { list: ListOutput }) => (
//   <IonItem routerLink={`/tabs/lists/${props.list.id}`} className="list-entry">
//     <IonLabel>{props.list.name}</IonLabel>
//   </IonItem>
// );

const ListEntry = (props: { list: ListOutput }) => (
  <IonItem routerLink="" className="list-entry">
    <div>
      <IonLabel>{props.list.title}</IonLabel>
      <IonLabel>{props.list.author}</IonLabel>
      <IonLabel>{props.list.shortDescription}</IonLabel>
    </div>
  </IonItem>
);

const SearchInput = () => {
  return (
    <div className="relative m-4">
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Jane Smith"
      />
    </div>
  );
};

const AllLists = () => {
  const lists = trpc.useQuery(["list.all"]);

  return (
    // <>
    //   {!lists.data ? (
    //     <IonLoading isOpen={true}></IonLoading>
    //   ) : (
    //     lists.data.map((list, i) => <ListEntry list={list} key={i} />)
    //   )}
    // </>
    <>
      <SearchInput />
      <div className="px-4">
        <button
          type="button"
          className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        >
          Search
        </button>
      </div>

      {!lists.data ? (
        <IonLoading isOpen={true}></IonLoading>
      ) : (
        lists.data.map((list, i) => <ListEntry list={list} key={i} />)
      )}
    </>
  );
};

const Search = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SEARCH</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AllLists />
      </IonContent>
    </IonPage>
  );
};

export default Search;
