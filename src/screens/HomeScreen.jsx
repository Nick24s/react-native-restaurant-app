import { ScrollView, StyleSheet, Text, View } from "react-native";
import {  getItemsByCategory } from "../data/menuItems";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import { categoryApi , mealApi} from "../api";

export default function HomeScreen({navigation}) {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
     categoryApi.getAll()
    .then(result => {
      setCategories(result.data);
    })
    .catch(error => {
     alert(error.message)
    });

    mealApi.getFeatured()
    .then(result => {
      setFeatured(result.data);
  })
    .catch(err => alert('Cannot get featured items: ' + err.message)
    )
    
    },[])

    const categoryPressHandler = (categoryId) => {
        navigation.navigate('Category', {categoryId});
    }

    const itemPressHandler = (itemId) => {
        navigation.navigate('Details', {itemId})
    }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Tasty Bites</Text>
        <View style={styles.headerInfo}>
          <Text style={styles.infoText}>⭐ 4.8 Rating</Text>
          <Text style={styles.infoDot}>•</Text>
          <Text style={styles.infoText}>🕐 25 - 35 min</Text>
        </View>
        <Text style={styles.tagline}>
          Fresh & Delicious Food delivered Fast
        </Text>
      </View>

      {/* feature section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        <ScrollView horizontal style={styles.featuredList}>
          {featured.map((item) => (
            <View key={item.id} style={styles.featuredCard}>
              <Card {...item} onPress={itemPressHandler}/>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* categorhy section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {categories.map((category) => {
          const itemCount = getItemsByCategory(category.id).length;
          return (
            <CategoryCard
              key={category.id}
              {...category}
              itemCount={itemCount}
              onPress={categoryPressHandler}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#007AFF",
    padding: 24,
    paddingTop: 16,
    paddingBottom: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  infoDot: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.6,
    marginHorizontal: 8,
  },
  tagline: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
  },
  section: {
    padding: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  featuredList: {
    paddingRight: 16,
    flexDirection: "row",
  },
  featuredCard: {
    width: 200,
    marginRight: 12,
  },
  bottomPadding: {
    height: 24,
  },
});
