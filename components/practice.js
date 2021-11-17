
const accessKey = '7k63El1Cl_Y9qcmIOnqeLcqEwArN8liNuk1xYDuSJfY'
const unsplashAPI = 'https://api.unsplash.com'

// Utilizing Props
const Cat = (props)=>{
const [isHungry,setIsHungry] = useState(true);
return (
  <View>
    <Text>
      I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
    </Text>
    <Button onPress={()=>{setIsHungry(false)}} disabled={!isHungry} title={isHungry ? "Pour me some milk" : "Thank you"}/>
  </View>
)
}

// Capturing the user Input && using ScrollView
const PizzaTranslator = ()=>{
  const [text,setText] = useState('');
  return (
    <ScrollView style={{padding:80}}>
      <TextInput style={{height:40}}
       placeholder="Type here to transalate" 
       onChangeText={text => setText(text)}
       defaultValue = {text}/>
       <Text style={{padding:40,fontSize:42}}>
         {
           text.split(" ").map(word=>word && '🍕').join(' ')
         }
       </Text>
    </ScrollView>
  )
}

// FlatList Basics

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
  }
})

const FlatBasis =()=>{
  const [images,setImages] = useState([])
const callback = async () => {
  const res = await axios.get(`${unsplashAPI}/photos?client_id=${accessKey}`)
  console.log(res);
  setImages(res.data)
  // setTimeout(() => setImages(() => res.data), 1000)

}
  useEffect(()=>{callback()},[])

  // useEffect(() => async()=>{
  //   try{
  //     const res = await axios.get()
  //     // const res = await fetch(`${unsplashAPI}/photos?client_id=${accessKey}`)
  //     // const data = await res.json();
  //     setImages(data)
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // },[])
  return (
    <View>
      <FlatList
      data={images} 
      renderItem={
        ({item})=><Text style={styles.item}>{item.id}</Text>
      }/>
    </View>
  )
}

//Section List Basics

const sectionListStyles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)'
  },
  item:{
    padding:10,
    fontSize:18,
    height:44
  }
})

const SectionListBasics = ()=>(
  <View style={sectionListStyles.container}>
    <SectionList 
    sections={
      [
        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]
    }
    renderItem={({item})=><Text style={sectionListStyles.item}>{item.data}</Text>}
    renderSectionHeader = {(section)=><Text style={sectionListStyles.sectionHeader}>{section.title}</Text>}
    keyExtractor={(item,index)=>index}/>

  </View>
)