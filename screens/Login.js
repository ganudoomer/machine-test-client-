import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function Login({ navigation }) {
	const [ state, setState ] = useState({
		email: '',
		password: ''
	});
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login to your account</Text>
			<TextInput
				value={state.email}
				onChangeText={(email) => setState({ ...state, email: email })}
				placeholder={'Email'}
				style={styles.input}
			/>
			<TextInput
				value={state.password}
				onChangeText={(password) => this.setState({ password })}
				placeholder={'Password'}
				secureTextEntry={true}
				style={styles.input}
			/>

			<TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
				<Text>Login To Your Account</Text>
			</TouchableOpacity>
			<Button title={'Register'} onPress={() => navigation.navigate('Register')} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		marginBottom: 10
	},
	text: {
		padding: 10
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		margin: 10
	}
});
