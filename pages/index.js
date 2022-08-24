import Head from 'next/head'
import UserListItem from 'component/userListItem';
import styles from 'styles/Home.module.css'
import React from 'react';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/users?limit=500');
  const data = await res.json();

  return {
    props: {
      users: data
    }
  }
}

export default function Home({ users }) {
  const cache = React.useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  }))
  return (
    <div className={styles.container}>

      <Head>
        <title>User List</title>
        <meta name="description" content="User List Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.user_content}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={users.users.length}
              rowRenderer={({ key, index, style, parent }) => {
                const user = users.users[index]
                return (
                  <CellMeasurer 
                    key={key} 
                    cache={cache.current} 
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <UserListItem user={user} style={style} />
                  </CellMeasurer>
                )
              }}
            />
          );
        }}
      </AutoSizer>
      </div>
      
    </div>
  )
}
