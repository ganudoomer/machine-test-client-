import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Caption } from 'react-native-paper';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
export default function Dashboard({ navigation }) {
	const [ state, setState ] = useState({
		email: '',
		password: ''
	});
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Card>
				<Card.Title title="Welcome test@gmai.com" subtitle="80755012555" />
				<Card.Content>
					<Title>12/12/2000</Title>
					<Paragraph>Date of Birth</Paragraph>
				</Card.Content>
				<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
				<Card.Actions>
					<Button onPress={() => navigation.navigate('Edit')}>Edit</Button>
				</Card.Actions>
			</Card>
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
