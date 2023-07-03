import { View, Text ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles';


import Header from '../components/Header';
import Footer from "../components/Footer.jsx"

import {TouchableOpacity} from 'react-native';
import { Avatar ,Button} from 'react-native-paper';
import SearchModel from "../components/SearchModel";
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';


const categories = [
  {category :"Nike", _id: "Nike"},
  {category : "Man" , _id: "dfdxcv"},
  {category : "Women" , _id: "sagfdfgd"},
  {category : "Kids", _id: "xcvcxvxc"},
  {category : "Electronics", _id: "Homeddsasasdsc"},
]

products=[{
  price:25000,
  name:"Nike Air Jordan 1",
  _id:"NikeAir",
  stock:23,
  images:[
    {
    url:"https://static.nike.com/a/images/t_default/1f3586ce-7b81-45c6-9405-c2116a5ec967/air-jordan-1-mid-shoes-86f1ZW.png",
    },
    {
      url:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3330d1c-325e-4f5d-92a2-68523149bcb3/air-jordan-1-mid-shoes-86f1ZW.png",
    },
],
},
{
  price:174000,
  name:"Macbook Pro M2",
  _id:"Electronics",
  stock:55,
  images:[
    {
    url:"https://m.media-amazon.com/images/I/61LNGJEMh0L._SL1500_.jpg",
    },
    {
      url:"https://m.media-amazon.com/images/I/715yuf5yEQL._SL1500_.jpg",
    },
],
},
{
  price:5999,
  name:"UTILITY CARGO JEANS",
  _id:"zara",
  stock:3,
  images:[
    {
    url:"https://static.zara.net/photos///2023/I/0/2/p/6688/333/800/2/w/456/6688333800_2_1_1.jpg?ts=1685626600392",
    },
    {
      url:"https://static.zara.net/photos///2023/I/0/2/p/6688/333/800/2/w/850/6688333800_1_1_1.jpg?ts=1685626600125",
    },
],
}


];

const Home = () => {

 

  const [category,setCategory] = useState("");
  const [activeSearch,setActiveSearch] = useState(false);
  const [searchQuery,setSearchQuery] = useState("");
  const navigate = useNavigation();

  const categoryButtonHandler= (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add to Card", id);
  };

  console.log(category);


  return (
      <>
   {activeSearch && (
     <SearchModel searchQuery={searchQuery}  setSearchQuery={setSearchQuery} 
     setActiveSearch={setActiveSearch} products={products}
     />
   )}
    <View style={defaultStyle}>
     <Header />
     <View style = {{
      paddingTop:70,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
     }}>
      {/* Heading Row */}

     <View  >
      <Text style={{fontSize:25,}}>Our</Text>
      <Text style={{fontSize:25, fontWeight:"900" }}>Products</Text>
     </View>

      {/* Search Bar */}
       <View>
       <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
          <Avatar.Icon  icon={"magnify"} color={"gray"} 
          size={50}
          style={{backgroundColor:colors.color2, elevation: 12}}
          />
          </TouchableOpacity>
      </View> 
     </View>

     {/* Category */}
     <View style={{
      flexDirection: "row",
      height: 80,
     }}>
     <ScrollView 
     horizontal
      showsHorizontalScrollIndicator = {false}
      contentContainerStyle={{
        alignItems:"center"
      }}
      >
     {
        categories.map((item,index) => (
          <Button 
          key={item._id}
          style={{
            backgroundColor: category === item._id ? colors.color1: "lightgray",
            borderRadius:100,
            margin:5,
          }}
          onPress={() => categoryButtonHandler(item._id)}
          >
           <Text 
           style={{
            fontSize:12,
            color:category === item._id ? "white": "gray", 
           }}
           >
            {item.category}
           </Text>
          </Button>
        ))
      }
     </ScrollView>
     </View>

     {/* Product */}
     <View style={{flex: 1,}}>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {
          products.map((item,index)=> (
            <ProductCard 
            stock={item.stock}
            name={item.name}
            price={item.price}
            image={item.images[0]?.url}
            addToCardHandler={addToCardHandler}
            id={item.id}
            key={item._id}
            i={index}
            navigate={navigate}
            />
          ))
        }
      </ScrollView>
     </View>

    </View>

    <Footer activeRoute={"home"} />


    </>
  );
};

export default Home