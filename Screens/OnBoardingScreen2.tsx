import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useState} from 'react';

function OnBoardingScreen2() {
  const [selectedItemIndices, setSelectedItemIndices] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  const data = [
    {
      id: '1',
      item: 'Stories',
    },
    {
      id: '2',
      item: 'Article',
    },
    {
      id: '3',
      item: 'ST Reels',
    },
    {
      id: '4',
      item: 'Soundboard',
    },
    {
      id: '5',
      item: 'Tweets',
    },
    {
      id: '6',
      item: 'Magzines',
    },
    {
      id: '7',
      item: 'Videos',
    },
    {
      id: '8',
      item: 'Lives',
    },
    {
      id: '9',
      item: 'Stories',
    },
    {
      id: '10',
      item: 'Polls',
    },
    {
      id: '11',
      item: 'Quiz',
    },
    {
      id: '12',
      item: 'Infographics',
    },
    {
      id: '13',
      item: 'Survey',
    },
    {
      id: '14',
      item: 'Launches',
    },
    {
      id: '15',
      item: 'Travels',
    },
    {
      id: '16',
      item: 'Podcast',
    },
  ];

  const toggleItemSelection = index => {
    // Check if the item is already selected, and toggle its selection
    if (selectedItemIndices.includes(index)) {
      setSelectedItemIndices(selectedItemIndices.filter(i => i !== index));
    } else {
      setSelectedItemIndices([...selectedItemIndices, index]);
    }
  };

  const renderItem = ({item, index}) => {
    const isSelected = selectedItemIndices.includes(index);
    return (
      <View>
        <TouchableOpacity
          onPress={() => toggleItemSelection(index)}
          style={[
            styles.itemContainer,
            isSelected ? styles.selectedItem : styles.unselectedItem,
          ]}>
          <Text
            style={[
              // styles.textItem,
              isSelected ? styles.selectedText : styles.unselectedText,
            ]}>
            {item.item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ConsoleSelectedItemsHandler = () => {
    const selectedItems = selectedItemIndices.map(index => data[index].item);
    console.log('Selected Items: ', selectedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Choose the content that you are interested.
      </Text>
      <View style={styles.flatListItem}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          numColumns={numColumns}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: 32}}>
        <View style={styles.circle1}></View>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.button}>
          <TouchableOpacity onPress={ConsoleSelectedItemsHandler}>
            <Text style={styles.buttonText}>
              Get Started <Text style={{fontWeight: 'bold'}}>-&rarr;</Text>
            </Text>
          </TouchableOpacity>
          {/* <Button
          title="Get Started &rarr;"
          onPress={ConsoleSelectedItemsHandler}
          color="#2a149a"
        /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListItem: {
    flex: 0.7,
    marginLeft: 28,
  },
  text: {
    flex: 0.27,
    color: '#572AC2',
    fontSize: 36,
    lineHeight: 46,
    marginTop: 30,
    marginLeft: 32,
  },
  item: {
    color: 'black',
    fontSize: 20,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    // marginHorizontal: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    // marginBottom: 15,
  },
  selectedItem: {
    backgroundColor: '#000',
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  unselectedText: {
    color: 'black',
  },
  unselectedItem: {
    backgroundColor: 'white',
  },
  button: {
    width: 156,
    height: 47,
    marginLeft: 110,
    marginTop: 10,
    backgroundColor: '#5F1EBE',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 5,
    gap: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    // fontSize: 13,
  },
  circle1: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#dbdcf5',
    marginTop: 30,
    marginRight: 8,
  },
  circle2: {
    height: 10,
    width: 20,
    borderRadius: 5,
    backgroundColor: '#303391',
    marginTop: 30,
    marginRight: 5,
  },
});

export default OnBoardingScreen2;
