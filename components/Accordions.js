import React,{useState} from "react";
import { StyleSheet,StatusBar } from "react-native";



// *************************** Accordions ***************************

// ********** Style Sheets **********
const accordionStyles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:StatusBar.currentHeight || 0
    },
    heading:{
      fontSize:20,
      textAlign:"center",
      padding:10,
      borderColor:"#347aeb",
      borderWidth:1,
      backgroundColor:"#34a8eb",
      color:"#fff"
    },
    text:{
      textAlign:"center"
    }
  })
  // ********** Style Sheets End **********
  
  
  const MultipleAccordion = (props)=>{
    const [openAccordion,setOpenAccordion] = useState(false);
    return (
      <SafeAreaView style={accordionStyles.container}>
        <FlatList
        data={props.data}
        renderItem = {({item})=><Text style={accordionStyles.heading}>{item.title}</Text>} 
        />
        {/* <Pressable
          onPress={()=>setOpenAccordion(!openAccordion)}
          >
          <Text 
            style={accordionStyles.heading} 
          >{props.name || "Default"} </Text>
        </Pressable>
        
          
        {
          openAccordion && (
         <Text style={accordionStyles.text}>
             {props.data.body}
         </Text>
          )
        } */}
  
      </SafeAreaView>
    )
  }
  const OneAccordionAtATime = (props)=>{
    return (
        <SafeAreaView>
          <Pressable
          onPress={()=>{
            props.setShowCurrentAccordion(props.data.id)}}>
            <Text
          style={accordionStyles.heading} 
          >
            {props.data.title || "Default"}
            </Text>
          </Pressable>
            
          {
            props.showCurrentAccordion === props.data.id &&
           <Text>
             {props.data.body}
           </Text>
          }
    
        </SafeAreaView>
    )
  }
  
  const Accordions = (props)=>{

    const [accordionData,setAccordionData] = useState([])
    const [limit,setLimit] = useState(10)
    // ********** data *********
  const accordionAPI = `https://jsonplaceholder.typicode.com/posts?_page=0&_limit=${limit}`
  const getAccordionData = async()=>{
    try {
      const res = await axios.get(accordionAPI)
      setAccordionData(res.data)
    } catch (e) {
      console.log(e);
    }
  }

  useState(()=>getAccordionData(),[])

    const [showCurrentAccordion,setShowCurrentAccordion] = useState(null);
    
    return (
      <>
        {
          props.enableOneAccordinAtATime  ?
          props.accordionData.map((accord)=><OneAccordionAtATime showCurrentAccordion= {showCurrentAccordion} setShowCurrentAccordion={setShowCurrentAccordion} data={accord} key={accord.id} />) :
        <MultipleAccordion  data={props.accordionData} />
          
        }
      </>
    )
  }
  
  
  // *************************** Accordions End ***************************
  

export default Accordions;