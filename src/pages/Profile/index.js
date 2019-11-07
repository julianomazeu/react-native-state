import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'



class Profile extends React.Component{
    state ={
        name: '',
        age: '',
        professional: ''
    }

    /**
     * Executa quando o botão é clicado
     */

     handleSubmit(){
         Alert.alert('Seus dados', `Nome: ${this.state.name}, 
Idade: ${this.state.age}, 
Profissão: ${this.state.professional}` )
     }

    render(){
        console.log (this.state)
        return(
            <View style={styles.viewBackground}>
                <Text style={styles.textWelcome}>Welcome</Text>
                <Text style={styles.textInformations}>Suas informações</Text>
                
                
             <View style={styles.viewData}>
                <Text style={styles.textInfo}>Nome: {this.state.name}</Text>
                <TextInput 
                    style={styles.inputInfo} 
                    placeholder= "Seu nome" 
                    onChangeText={ (text) => this.setState( { name: text })} 
            />

                <Text style={styles.textInfo}>Idade: {this.state.age}</Text>
                <TextInput 
                    style={styles.inputInfo} 
                    placeholder="Sua idade" 
                    onChangeText={ ( text ) => this.setState ( { age: text})}
                />


                <Text style={styles.textInfo}>Profissão: {this.state.professional}</Text>
                <TextInput 
                    style={styles.inputInfo} 
                    placeholder="Sua profissão"
                    onChangeText={ ( text ) => this.setState ( { professional: text})}
                 />
                
                
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => this.handleSubmit()}>
                    <Text style={styles.textSubmit}>Enviar</Text>
                </TouchableOpacity>
             </View>

            </View>

           
                        
        )
        
    }
}

const styles = StyleSheet.create({
    viewBackground:{
        flex: 1,
        backgroundColor: '#19181F',
        alignItems: 'center'
    },
    textWelcome: {
        color: '#fff',
        fontSize: 64,
        
    },
    textInformations:{
        color: '#fff',
        fontSize: 24,
        marginTop: 84
    },
    textInfo:{
        color:'#fff',
        fontSize: 20,
    
    },
    viewData:{
        width: '80%',
        alignItems: 'center',
        marginTop: 80
    },
    inputInfo:{
        backgroundColor: '#676280',
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        marginBottom: 24
    },
    buttonSubmit:{
        backgroundColor: '#333140',
        padding: 20,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center'
    },
    textSubmit:{
        color:'#fff',
        fontSize: 22
    }

})

export default Profile