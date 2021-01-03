import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
	const [ state, setState ] = useState({
		email: '',
		password: ''
	});
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Register an new account</Text>
			<TextInput
				value={state.email}
				onChangeText={(email) => setState({ ...state, email: email })}
				placeholder={'Email'}
				style={styles.input}
			/>
			<TextInput
				value={state.phone}
				onChangeText={(phone) => setState({ ...state, phone: phone })}
				placeholder={'Phone'}
				style={styles.input}
				keyboardType={'numeric'}
			/>
			<TextInput
				value={state.Date}
				onChangeText={(password) => this.setState({ ...state, Date: password })}
				placeholder={'Date in dd/mm/yy'}
				style={styles.input}
			/>{' '}
			<TextInput
				value={state.password}
				onChangeText={(password) => this.setState({ password })}
				placeholder={'Gender'}
				style={styles.input}
			/>
			<TextInput
				value={state.password}
				onChangeText={(password) => this.setState({ password })}
				placeholder={'Password'}
				secureTextEntry={true}
				style={styles.input}
			/>
			<Button title={'Register'} onPress={() => navigation.navigate('Login')} style={styles.input} />
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
		height: 30,
		padding: 10,

		marginBottom: 10
	},
	text: {
		padding: 10
	}
});
