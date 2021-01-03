import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
	const [ state, setState ] = useState({
		email: 'test@gmail.com',
		password: '',
		Date: '12/12/2000',
		phone: '8075501215',
		Gender: 'male'
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
				onChangeText={(Date) => this.setState({ ...state, Date: Date })}
				placeholder={'Date in dd/mm/yy'}
				style={styles.input}
			/>{' '}
			<TextInput
				value={state.Gender}
				onChangeText={(Gender) => this.setState({ ...state, Gender: Gender })}
				placeholder={'Gender'}
				style={styles.input}
			/>
			<TextInput
				value={state.password}
				onChangeText={(password) => this.setState({ ...state, password: password })}
				placeholder={'Password'}
				secureTextEntry={true}
				style={styles.input}
			/>
			<Button title={'Edit'} onPress={() => navigation.navigate('Dashboard')} style={styles.input} />
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
