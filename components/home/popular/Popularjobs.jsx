import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router"

import styles from './popularjobs.style'
import { COLORS, icons, images, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Jobs</Text>
        <TouchableOpacity>

          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5,6 ]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
          />
        )}
      </View>

    </View>
  )
}

export default Popularjobs